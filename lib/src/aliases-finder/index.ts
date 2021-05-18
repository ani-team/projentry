import { promises as fs, existsSync } from "fs";
import * as path from "path";
import { Alias, AliasFinder, AliasFinderProps } from "./types";
import jsConfig from "./jsconfig.alias-finder";
import VueCli from "./vue-cli.alias-finder";

const aliasFinders: AliasFinder[] = [jsConfig, VueCli];

export default async function findAliases(baseDir: string): Promise<Alias[]> {
  const rootDirFiles = await fs.readdir(path.resolve(baseDir));
  const packageJsonPath = path.resolve(baseDir, "package.json");
  let packageJson: any = null;
  if (existsSync(packageJsonPath)) {
    try {
      packageJson = JSON.parse(await fs.readFile(packageJsonPath, "utf-8"));
    } catch (err) {
      console.warn(err);
    }
  }
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
