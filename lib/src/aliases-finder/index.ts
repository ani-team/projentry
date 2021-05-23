import { promises as fs } from "fs";
import * as path from "path";
import { getPackageJson } from "../common/package-json";
import { Alias, AliasFinder, AliasFinderProps } from "./types";
import jsConfig from "./jsconfig.alias-finder";
import VueCli from "./vue-cli.alias-finder";

const aliasFinders: AliasFinder[] = [jsConfig, VueCli];

export default async function findAliases(
  baseDir: string = process.cwd(),
): Promise<Alias[]> {
  const rootDirFiles = await fs.readdir(path.resolve(baseDir));
  const packageJson = await getPackageJson(baseDir);
  const props: AliasFinderProps = {
    basePath: baseDir,
    rootDirFiles,
    packageJson,
  };

  const aliases = [].concat(
    ...(await Promise.all(aliasFinders.map((finder) => finder(props)))),
  );

  return Array.from(new Set(aliases).values());
}
