import { useEffect } from "react";
import { PROJECT_NAME } from "shared/config";

/**
 * @hook Задать title странице
 */
export const useTitle = (title: string) => {
    useEffect(() => {
        document.title = title;
    }, [title]);
};

export const useProjectTitle = (title: string) => useTitle(`${title} | ${PROJECT_NAME}`);

/**
 * Временная реализация скроллинга к верху страницы
 * @remark Используется при пагинации
 * !!! FIXME: temp, resolve better later (by anchors / overflow / ref / scrollHandler / window patching / ...)
 * !!! FIXME: resolve on withAntd level? (with getParentContainer)
 */
export const scrollToTop = () => {
    document.querySelector("html")?.scrollTo({ top: 0, behavior: "smooth" });
};
