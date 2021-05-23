import findAliases from "./aliases-finder";
import { analyzeDependencies } from "./analyze";
import { findImports } from "./imports-finder";
// import { promises as fs } from "fs";
// import * as path from "path";

function initOnDir(directory: string) {
  process.chdir(directory);
}

export { default as globFileSearch } from "./common/glob-file-search";
export { getConfig } from "./common/load-config";
export { getPackageJson } from "./common/package-json";
export { initOnDir };
export { findAliases };
export { findImports };
export { analyzeDependencies };

// (async () => {
//   initOnDir("/home/niyaz/Projects/work/GBSK_admin_front");
//   const aliases = await findAliases();
//   const imports = await findImports(["src/**/*.{vue,js,ts}"], aliases);
//   // console.log(imports);
//   const deps = analyzeDependencies(imports);
//   await fs.writeFile(
//     path.resolve(__dirname, "..", "test.json"),
//     JSON.stringify(deps, null, 4),
//   );
// })();
