import { Alias } from "../aliases-finder/types";
import getFilePaths from "./get-filepaths";
import * as matchAll from "string.prototype.matchall";
import { promises as fs, existsSync } from "fs";
import * as path from "path";

const commentsPattern = /(".*?"|'.*?'|`[\S\s]*?`)|(\/\*[\S\s]*?\*\/|\/\/[^\r\n]*$)/gim;

const importPattern = /(import .*? from\s+('(\S+)'|"(\S+)"))/gi;
const importAsyncPattern = /(import\s*\(\s*('(\S+)'|"([\w.\/]+)")\s*\))/gi;

export type Import = {
  path: string;
  relativePath?: string;
  async?: boolean;
  external?: boolean;
  unknown?: boolean;
};
export type Imports = { path: string; imports: Import[] }[];

export default async function findImportsRegexp(
  patterns: string[],
  aliases: Alias[],
  basePath: string,
): Promise<Imports> {
  const filepaths = await getFilePaths(patterns);
  const files: Imports = [];
  const mapAliased2Relative = makeMapAliased2Relative(basePath, aliases);
  for (const filepath of filepaths) {
    const relativePath = path.relative(basePath, filepath);
    let sourceCode = await fs.readFile(filepath, "utf-8");
    sourceCode = removeComments(sourceCode);

    const imports = [...matchAll(sourceCode, importPattern)].map((imp) => ({
      path: imp[4] || imp[3],
    }));
    const asyncImports = [
      ...matchAll(sourceCode, importAsyncPattern),
    ].map((imp) => ({ path: imp[4] || imp[3], async: true }));
    imports.push(...asyncImports);

    files.push({
      path: relativePath,
      imports: await Promise.all(
        imports.map(async (imp) => ({
          ...imp,
          ...(await mapAliased2Relative(imp.path, relativePath)),
        })),
      ),
    });
  }

  return files;
}

async function resolveExt(filepath: string) {
  if (!path.extname(filepath)) {
    const dir = await fs.readdir(path.dirname(filepath));
    const fileBaseName = path.basename(filepath);
    const fileWithExt = dir.find((file) => file.startsWith(`${fileBaseName}.`));
    if (fileWithExt) return path.join(path.dirname(filepath), fileWithExt);
  }
  return filepath;
}
function makeMapAliased2Relative(baseDir: string, aliases: Alias[]) {
  return async (maybeAliasedPath: string, currentFile: string) => {
    if (maybeAliasedPath.startsWith(".")) {
      let filepath = path.resolve(
        baseDir,
        path.dirname(currentFile),
        maybeAliasedPath,
      );
      filepath = await resolveExt(filepath);
      return {
        relativePath: path.relative(baseDir, filepath),
      };
    }
    const alias = aliases.find(({ alias }) =>
      maybeAliasedPath.startsWith(alias),
    );
    if (!alias) return { external: true };
    const regExp = new RegExp(`^${alias.alias}(/?)`);
    for (const p of alias.paths) {
      let preferredPath = path.resolve(
        baseDir,
        p,
        maybeAliasedPath.replace(regExp, ""),
      );
      preferredPath = await resolveExt(preferredPath);
      if (existsSync(preferredPath))
        return {
          relativePath: path.relative(baseDir, preferredPath),
        };
    }
    return { unknown: true };
  };
}

function removeComments(code: string) {
  const replacer = (match, group1, group2) => {
    if (group2) return "";
    return group1;
  };
  return code.replace(commentsPattern, replacer);
}
