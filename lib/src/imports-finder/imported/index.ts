import * as fs from "fs";
import * as path from "path";

const ensureArray = require("ensure-array");
const _get = require("lodash/get");
const _difference = require("lodash/difference");
const _values = require("lodash/values");
const _uniq = require("lodash/uniq");
const _flatten = require("lodash/flatten");
const babel = require("@babel/core");
const esprima = require("esprima");
const glob = require("glob");
const resolveGlob = require("./resolve-glob");

let babelOptions = {};
try {
  babelOptions = JSON.parse(fs.readFileSync(".babelrc", "utf-8"));
} catch (e) {
  // No custom babel configuration found - using defaults
}

const defaultOptions = {
  packageImports: true,
  absoluteImports: false,
  relativeImports: false,
};

// @params {string|array} patterns The glob pattern or a list of glob patterns.
// @params {object} options The options object.
// @params {boolean} [options.flatten] True to flatten the output, defaults to false.
// @params {boolean} [options.packageImports] True to return package imports, defaults to true.
// @params {boolean} [options.absoluteImports] True to return absolute imports, defaults to false.
// @params {boolean} [options.relativeImports] True to return relative imports, defaults to false.
export const findImportsLib = async function (patterns, { babelConfig, ...options }) {
  let requiredModules = {};
  let filepaths = [];
  const addModule = function (modulePath, value) {
    if (value[0] === "/") {
      if (!!options.absoluteImports) {
        requiredModules[modulePath].push(value);
      }
    } else if (value[0] === ".") {
      if (!!options.relativeImports) {
        requiredModules[modulePath].push(value);
      }
    } else if (!!options.packageImports) {
      requiredModules[modulePath].push(value);
    }
  };
  const isRequireExpression = function (o) {
    return (
      _get(o, "type") === "CallExpression" &&
      _get(o, "callee.type") === "Identifier" &&
      _get(o, "callee.name") === "require" &&
      _get(o, "arguments[0].type") === "Literal"
    );
  };

  // options
  options = Object.assign({}, defaultOptions, options || {});

  {
    // glob patterns
    let positives = [];
    let negatives = [];

    patterns = [].concat(patterns || []);
    patterns.forEach(function (pattern) {
      // Make a glob pattern absolute
      pattern = resolveGlob(pattern);

      if (pattern.charAt(0) === "!") {
        negatives = negatives.concat(glob.sync(pattern.slice(1)));
      } else {
        positives = positives.concat(glob.sync(pattern));
      }
    });

    filepaths = _difference(positives, negatives);
  }

  for (const filepath of filepaths) {
    const stat = fs.statSync(filepath);
    if (!stat.isFile()) {
      return;
    }

    let modulePath: string;
    try {
      let code = await fs.promises.readFile(filepath, "utf-8");
      if (Array.isArray(options.preprocessors)) {
        console.log(/\.vue$/.test(filepath));
        code = options.preprocessors.filter(({ test }) => test?.test(filepath)).reduce((pCode, preprocessor) => preprocessor?.loader(pCode), code);
      }
      const result = await babel.transformAsync(code, {
        filename: filepath,
        ...(options.babelConfig || babelOptions || undefined),
      });
      const tree = esprima.parse(result.code, {
        sourceType: "module",
      });
      modulePath = path.relative(process.cwd(), filepath);

      requiredModules[modulePath] = [];

      tree.body.forEach(function (node) {
        if (
          node.type === "ExpressionStatement" &&
          node.expression.type === "CallExpression" &&
          node.expression.callee.type === "MemberExpression" &&
          node.expression.callee.object.type === "CallExpression" &&
          node.expression.callee.object.callee.name === "require"
        ) {
          addModule(modulePath, node.expression.callee.object.arguments[0].value);
          return;
        }

        if (node.type === "ExpressionStatement" && node.expression.type === "CallExpression" && node.expression.callee.name === "require") {
          addModule(modulePath, node.expression.arguments[0].value);
          return;
        }

        if (node.type === "VariableDeclaration") {
          node.declarations.forEach(function (decl) {
            const expr = decl.init;
            if (isRequireExpression(expr)) {
              addModule(modulePath, _get(expr, "arguments[0].value"));
              return;
            }

            const exprArguments = ensureArray(_get(decl, "init.arguments"));
            exprArguments.forEach(function (exprArgument) {
              if (isRequireExpression(exprArgument)) {
                addModule(modulePath, _get(exprArgument, "arguments[0].value"));
              }
            });
          });
          return;
        }

        if (node.type === "ImportDeclaration") {
          addModule(modulePath, node.source.value);
          return;
        }
      });
    } catch (e) {
      console.error("Error in `" + modulePath + "`: " + e);
    }
  }

  if (options.flatten) {
    requiredModules = _uniq(_flatten(_values(requiredModules)));
  }

  return requiredModules;
};
