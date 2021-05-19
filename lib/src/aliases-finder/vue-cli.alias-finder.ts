import { Alias, AliasFinderProps } from "./types";

export default async function VueCliAliasFinder({
  rootDirFiles,
}: AliasFinderProps): Promise<Alias[]> {
  if (!rootDirFiles.includes("vue.config.js")) {
    return [];
  }
  return [{ alias: "@/", paths: ["./src"] }];
}
