import * as fixtures from "./fixtures";

export const PATHS = {
    AUTH_HOOK: "features/auth/hooks/index.tsx",
    STYLES_1: "features/origin/styles.scss",
};

const docsMap: Record<string, string> = {
    [PATHS.AUTH_HOOK]: fixtures.authSnippet,
    [PATHS.STYLES_1]: fixtures.styleSnippet,
};

export const getDocs = () => fixtures;

export const getDoc = (pathname: string) => docsMap[pathname];
