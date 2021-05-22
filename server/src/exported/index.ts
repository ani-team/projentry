import * as ProjentryLib from "@projentry/lib";
import { promises as fsNode } from "fs";

const { getConfig, getPackageJson, globFileSearch, ...projentry } =
  ProjentryLib;

export const configs = {
  getConfig,
  getPackageJson,
};

export const fs = {
  readDir: fsNode.readdir,
  readFile: fsNode.readFile,
  globFileSearch,
};

export { projentry };
