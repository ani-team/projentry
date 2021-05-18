import findAliases from "./aliases-finder";
import { findImports } from "./imports-finder";

const baseDir = "/home/niyaz/Projects/work/GBSK_admin_front";

(async () => {
  process.chdir(baseDir);
  const aliases = await findAliases(baseDir);
  console.log(aliases);
  const imports = await findImports(["src/**/*.{js,vue}"], aliases, baseDir);
  console.log(JSON.stringify(imports, null, 2));
})();
