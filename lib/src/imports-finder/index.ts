import { Alias } from "../aliases-finder/types";
import findImportsRegexp from "./imports-regexp";

export async function findImports(
  patterns: string[],
  aliases: Alias[],
  baseDir = process.cwd(),
) {
  return await findImportsRegexp(patterns, aliases, baseDir);
}
