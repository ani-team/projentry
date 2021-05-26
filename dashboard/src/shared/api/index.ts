import { visibleLinesDelta, PATHS } from "shared/config";
import * as fixtures from "./fixtures";
// FIXME: @temp
/* eslint-disable import/namespace */
const fixturesMap: Record<string, string> = {
    // code
    [PATHS.CODE.AUTH_HOOK]: fixtures.code.authSnippet,
    [PATHS.CODE.STYLES_1]: fixtures.code.styleSnippet,
    [PATHS.CODE.TASK_DETAILS]: fixtures.code.taskDetailsSnippet,
    // docs
    [PATHS.DOCS.SETUP_ENV]: fixtures.docs.requirements,
    [PATHS.DOCS.DEV_GUIDE]: fixtures.docs.devguide,
    [PATHS.DOCS.PAGES]: fixtures.docs.pagesConventions,
    [PATHS.DOCS.FEATURES]: fixtures.docs.featuresConventions,
    [PATHS.DOCS.CODE_STYLE]: fixtures.docs.codeStyle,
    [PATHS.DOCS.STANDS]: fixtures.docs.standsDoc,
    [PATHS.DOCS.CODEGEN]: fixtures.docs.codegenSettings,
};
/* eslint-enable import/namespace */

export const getFiles = () => fixtures;

export const getFile = (pathname: string) => fixturesMap[pathname];

const computeNumberArea = (number: number, radius: number) => {
    const area = [number];
    // FIXME: lodash?
    for (let i = 1; i <= radius; i++) {
        area.push(number + i);
        area.unshift(number - i);
    }
    return area;
};

export const getFileIssueSnippets = (pathname: string, issueTag: string) => {
    const file = getFile(pathname);
    const totalLines = file.split("\n");
    const issueLinesIdx = totalLines
        .map((line, idx) => (line.includes(`@${issueTag}`) ? idx : -1))
        .filter((idx) => idx !== -1);

    const issueAreasIdx = issueLinesIdx
        .map((idx) => computeNumberArea(idx, visibleLinesDelta))
        .flat();
    const issueLines = totalLines
        .map((line, idx) => `${idx}\t${line}`)
        .filter((_, idx) => issueAreasIdx.includes(idx));

    const issueSnippets = issueLines.join("\n");
    return { file, issueSnippets };
};

export * as packageJson from "./package-json";
export * as npmApi from "./npm";
export { default as rpc } from "./rpc";
