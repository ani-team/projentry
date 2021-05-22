import fm from "front-matter";

import { string } from "shared/lib";
import { getFile } from "shared/api";

// FIXME: @hardcoded

// NOTE: Наверняка где-то уже есть обработка md файлов, включая атрибуты в начале файла
// Но я не нашел, поэтому буду писать здесь :(

// FIXME: move to entities lib?
type MdAttrs = {
    title: string;
    description: string;
};

export const parseAttrs = (content: string) => {
    return fm(content).attributes as Partial<MdAttrs>;
};

export const parseTitle = (content: string) => {
    // FIXME: add other variations
    const reg = /^# (\w+)/;
    const titles = reg.exec(content);
    if (!titles?.length) return;
    // FIXME: @temp specify
    return titles[0].replace("# ", "");
};

// FIXME: @temp
export const getSummary = (path: string): string => {
    const content = getFile(path);
    const attrs = parseAttrs(content);
    if (attrs.description) return attrs.description;
    return string.textOverflow(getBody(content));
};

export const getBody = (content: string): string => {
    return fm(content).body;
};

export const getTitle = (path: string): string => {
    const content = getFile(path);
    const attrs = parseAttrs(content);
    if (attrs.title) return attrs.title;
    const title = parseTitle(content);
    if (title) return title;
    return path;
};
