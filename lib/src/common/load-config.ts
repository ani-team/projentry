import { cosmiconfig, Options } from "cosmiconfig";

export function getConfig(
  moduleName = "projentry",
  cosmiconfigOptions?: Options,
) {
  return cosmiconfig(moduleName, cosmiconfigOptions);
}
