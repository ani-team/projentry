import type { PackageJson } from "type-fest";
import { config } from "./fixtures";

export const getPackageJson = (): PackageJson => JSON.parse(config.packageJson);

export const normalizeDependencies = (depsMap: PackageJson.Dependency) => {
    const depsList = Object.entries(depsMap || {}).map(([name, version]) => ({
        name,
        version,
    }));

    return depsList;
};

export const getDependencies = () => {
    const depsMap = getPackageJson().dependencies || {};
    return normalizeDependencies(depsMap);
};

export const getDevDependencies = () => {
    const depsMap = getPackageJson().devDependencies || {};
    return normalizeDependencies(depsMap);
};

export const getDependency = (name: string) => {
    const deps = getPackageJson().dependencies || {};
    const devDeps = getPackageJson().devDependencies || {};
    const version = deps[name] || devDeps[name];
    if (!version) return undefined;
    return { name, version };
};
