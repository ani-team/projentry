// FIXME: @lowCoupling
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

export const parseAttrs = (content: string): Partial<MdAttrs> => {
    if (!content.startsWith("---")) return {};
    // FIXME: @hardcoded @temp
    const attrsRaw = content.split("---\n")[1];
    const attrsLines = attrsRaw.split("\n").filter(Boolean);
    return attrsLines.reduce((attrs: any, line) => {
        const [key, value] = line.split(": ");
        attrs[key] = value;
        return attrs;
    }, {});
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
    return string.textOverflow(cleanFromAttrs(content));
};

export const cleanFromAttrs = (content: string): string => {
    if (!content.startsWith("---")) return content;
    // FIXME: @temp
    return content.split("---")[2];
};

export const getTitle = (path: string): string => {
    const content = getFile(path);
    const attrs = parseAttrs(content);
    if (attrs.title) return attrs.title;
    const title = parseTitle(content);
    if (title) return title;
    return path;
};
