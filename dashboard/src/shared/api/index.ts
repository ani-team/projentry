import { visibleLinesDelta } from "shared/config";
import * as fixtures from "./fixtures";

export const PATHS = {
    AUTH_HOOK: "features/auth/hooks/index.tsx",
    STYLES_1: "features/origin/styles.scss",
    TASK_DETAILS: "pages/task-details/index.tsx",
};

const docsMap: Record<string, string> = {
    [PATHS.AUTH_HOOK]: fixtures.authSnippet,
    [PATHS.STYLES_1]: fixtures.styleSnippet,
    [PATHS.TASK_DETAILS]: fixtures.taskDetailsSnippet,
};

export const getDocs = () => fixtures;

export const getDoc = (pathname: string) => docsMap[pathname];

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
    const file = getDoc(pathname);
    const totalLines = file.split("\n");
    const issueLinesIdx = totalLines
        .map((line, idx) => (line.includes(`FIXME: @${issueTag}`) ? idx : -1))
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
