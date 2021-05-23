import { Import, Imports } from "../imports-finder/imports-regexp";

type RootModule = {
  id: number;
  path: string;
  parent: null;
  children?: Array<Module & { async?: boolean; importString: string }>;
};

type Module = {
  id: number;
  path: string;
  parent: Module | RootModule;
  external?: boolean;
  unknown?: boolean;
  children?: Array<Module & { async?: boolean; importString: string }>;
};

export function analyzeDependencies(deps: Imports) {
  return buildGraph(deps, "src/main.js");
}

function buildGraph(deps: Imports, entry: string) {
  const modulesMap = new Map(deps.map((dep) => [dep, dep.imports]));
  const entryImports = deps.find((dep) => dep.path === entry);
  if (!entryImports) throw new Error("No entry module found");
  const entryModule: RootModule = {
    id: 0,
    path: entryImports.path,
    parent: null,
    children: [],
  };

  function _build(currentModule: Module | RootModule, imports: Import[]) {
    if (!imports || imports.length === 0) {
      return currentModule;
    }
    const children: Module["children"] = imports.map((imp, index) => {
      const { path, relativePath, ...rest } = imp;
      return {
        ...rest,
        id: currentModule.id + index + 1,
        path: relativePath || path,
        parent: currentModule,
        importString: path,
      };
    });
    for (const child of children) {
    }
    return { ...currentModule, children };
  }

  return _build(entryModule, entryImports.imports);
}
