type Args = {
    repoUri?: string;
    branch: string;
};

export const GITHUB_DOMAIN = "https://github.com";

/**
 * @hook Обработка внутренних ссылок
 * @remark
 * - В README могут быть указаны ссылки на локальные ресурсы репозитория (images, files, anchors, ...)
 * - Поэтому, для корректной навигации и отображения, было решено предобрабатывать подобные ссылки
 */
export const useLocalUri = ({ repoUri, branch }: Args) => {
    /**
     * Нормализация внутренних ссылок
     * @example
     * transformLocalUri("https://some-url/...")
     * // => "https://some-url/..."
     * transformLocalUri("#some-header")
     * // => "https://github.com/${repo}#some-header"
     * transformLocalUri("./SOMEFILE.md")
     * // => "https://github.com/${repo}/blobk/${branch}/SOMEFILE.md"
     * transformLocalUri("docs/ANOTHER.md")
     * // => "https://github.com/${repo}/blobk/${branch}/docs/ANOTHER.md"
     */
    const transformLinkUri = (uri: string) => {
        if (!repoUri) return uri;
        if (uri.startsWith("http")) return uri;
        if (uri.startsWith("#")) return `${GITHUB_DOMAIN}/${repoUri}${uri}`;
        // Если sibling-link - нормализуем
        const blobUrl = uri.replace("./", "");
        return `${GITHUB_DOMAIN}/${repoUri}/blob/${branch}/${blobUrl}`;
    };

    /**
     * Получение исходника локального изображения
     * FIXME: Работает только с markodwn-изображениями, потом переделать бы на общий случай
     * @example
     * transformImageUri("docs/search.png")
     * // => https://raw.githubusercontent.com/${repo}/${branch}/docs/search.png
     */
    const transformImageUri = (uri: string) => {
        if (!repoUri) return uri;
        if (uri.startsWith("http")) return uri;
        // Если sibling-link - нормализуем
        const blobUrl = uri.replace("./", "");
        return `https://raw.githubusercontent.com/${repoUri}/${branch}/${blobUrl}`;
    };

    return { transformLinkUri, transformImageUri };
};
