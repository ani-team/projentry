import { existsSync, promises as fs } from "fs";
import path from "path";

export async function getPackageJson(
  baseDir = process.cwd(),
): Promise<any | null> {
  const packageJsonPath = path.resolve(baseDir, "package.json");
  let packageJson: any = null;
  if (existsSync(packageJsonPath)) {
    try {
      packageJson = JSON.parse(await fs.readFile(packageJsonPath, "utf-8"));
    } catch (err) {
      console.warn(err);
    }
  }
  return packageJson;
}
