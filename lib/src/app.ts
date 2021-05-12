import { promises as fs } from "fs";
import * as path from "path";
import findAliases from "./aliases-finder";
import * as babel from "@babel/core";
import { findImports } from "./imports-finder";

const baseDir = "/home/niyaz/Projects/work/atb/pusk";

(async () => {
  process.chdir(baseDir);
  const aliases = await findAliases(baseDir);
  await findImports();
})();
