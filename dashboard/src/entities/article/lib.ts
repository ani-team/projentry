import fm from "front-matter";

// import { string } from "shared/lib";
import { getFile } from "shared/api";

// FIXME: @hardcoded

// NOTE: Наверняка где-то уже есть обработка md файлов, включая атрибуты в начале файла
// Но я не нашел, поэтому буду писать здесь :(

// FIXME: move to entities lib?
type MdAttrs = {
    title: string;
    description: string;
};

export const getAttrs = (content: string) => {
    return fm(content).attributes as Partial<MdAttrs>;
};

// FIXME: add other variations
export const H1_REG = /^# (\w+)/m;

export const parseTitle = (content: string) => {
    const titles = H1_REG.exec(content);
    if (!titles?.length) return;
    // FIXME: @temp specify
    return titles[1];
};

// // FIXME: @temp
// export const getSummary = (path: string): string => {
//     const content = getFile(path);
//     const attrs = getAttrs(content);
//     if (attrs.description) return attrs.description;
//     return string.textOverflow(getBody(content));
// };

export const getContent = (content: string): string => {
    return fm(content).body;
};

export const getBody = (content: string) => {
    return getContent(content).replace(H1_REG, "");
};

export const getTitle = (path: string): string => {
    const content = getFile(path);
    const attrs = getAttrs(content);
    if (attrs.title) return attrs.title;
    const title = parseTitle(content);
    if (title) return title;
    return path;
};
