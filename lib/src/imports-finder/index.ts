import { findImportsLib } from "./imported";
import * as path from "path";

export async function findImports() {
  module.paths.unshift(path.join(process.cwd(), "node_modules"));

  const VueLoaderPlugin = require("vue-loader/lib/index");
  const loader = new VueLoaderPlugin();

  const babelConfig = require(path.join(process.cwd(), "babel.config.js"));
  console.log(
    findImportsLib("src/*.vue", {
      babelConfig,
      preprocessors: [{ test: /\.vue$/, loader: VueLoaderPlugin }],
    }),
  );
}
