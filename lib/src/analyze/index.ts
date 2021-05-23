import { Import, Imports } from "../imports-finder/imports-regexp";

type ModuleSpec = Module & {
  async?: boolean;
  importString: string;
  parent_id: number;
};
type RootModule = {
  id: number;
  path: string;
  children?: Array<ModuleSpec>;
};

type Module = {
  id: number;
  path: string;
  external?: boolean;
  unknown?: boolean;
  children?: Array<ModuleSpec>;
};

export function analyzeDependencies(deps: Imports) {
  return buildGraph(deps, "src/main.js");
}

function buildGraph(deps: Imports, entry: string) {
  const modulesMap = new Map(deps.map((dep) => [dep.path, dep.imports]));
  const entryImports = deps.find((dep) => dep.path === entry);
  if (!entryImports) throw new Error("No entry module found");
  const entryModule: RootModule = {
    id: 0,
    path: entryImports.path,
    children: [],
  };

  function _build(
    currentModule: Module | RootModule,
    imports: Import[],
    rec = 0,
  ): ModuleSpec {
    if (!imports || imports.length === 0) {
      // @ts-ignore
      return currentModule;
    }
    const children: ModuleSpec[] = imports.map((imp, index) => {
      const { path, relativePath, ...rest } = imp;
      const child: ModuleSpec = {
        ...rest,
        id: currentModule.id + index + 1,
        path: relativePath || path,
        parent_id: currentModule.id,
        importString: path,
      };
      if (!relativePath) return child;
      if (!modulesMap.has(relativePath)) return child;
      if (rec > 4) return child;
      return _build(child, modulesMap.get(relativePath), rec + 1);
    });
    for (const child of children) {
      _build(child, child.children);
    }
    // @ts-ignore
    return { ...currentModule, children };
  }

  return _build(entryModule, entryImports.imports);
}
