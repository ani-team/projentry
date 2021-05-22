import findAliases from "./aliases-finder";
import { analyzeDependencies } from "./analyze";
import { findImports } from "./imports-finder";

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
//   console.log(imports);
//   // console.log(analyzeDependencies(imports));
// })();
