import { Alias, AliasFinderProps } from "./types";
import { promises as fs, existsSync } from "fs";
import * as path from "path";

export default async function ({
  basePath,
  rootDirFiles,
}: AliasFinderProps): Promise<Alias[]> {
  const jsConfigPath = path.resolve(basePath, "jsconfig.json");
  if (!rootDirFiles.includes("jsconfig.json") || !existsSync(jsConfigPath))
    return [];

  try {
    const jsConfig = JSON.parse(await fs.readFile(jsConfigPath, "utf-8"));

    if (!jsConfig.compilerOptions?.paths) return [];
    return Object.entries(
      jsConfig.compilerOptions.paths,
    ).map(([alias, paths]) => ({ alias, paths: paths as string[] }));
  } catch (err) {
    console.warn(err);
  }
  return [];
}
