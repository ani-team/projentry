const GITHUB_DOMAIN = "https://github.com";
const GITHUB_STATIC = "https://opengraph.githubassets.com/pseudo-hash";

export const parseRepoUri = (url: string) => {
    return url.replace(GITHUB_DOMAIN, "").slice(1);
};

export const getPreviewUrl = (uri: string) => {
    return `${GITHUB_STATIC}/${uri}`;
};
