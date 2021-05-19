import findAliases from "./aliases-finder";
import { findImports } from "./imports-finder";

function initOnDir(directory: string) {
  process.chdir(directory);
}

export { initOnDir };
export { findAliases };
export { findImports };
