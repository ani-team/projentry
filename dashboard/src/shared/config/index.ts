import * as AntdIcon from "@ant-design/icons";

import { PATHS } from "./paths";

const { DOCS } = PATHS;

export const PROJECT_NAME = "MyProj";

export type DocSection = {
    paths: string[];
};
export const docs: Record<string, DocSection> = {
    getStarted: {
        paths: [DOCS.SETUP_ENV, DOCS.DEV_GUIDE],
    },
    conventions: {
        paths: [DOCS.PAGES, DOCS.FEATURES, DOCS.CODE_STYLE],
    },
    faq: {
        paths: [DOCS.STANDS, DOCS.CODEGEN],
    },
};

export const ISSUES_TYPES = {
    LOW_COUPLING: "lowCoupling" as const,
    DRY: "dry" as const,
    HARDCODED: "hardcoded" as const,
};

export type IconType = keyof typeof AntdIcon;

export type Issue = {
    icon: IconType;
    tag: typeof ISSUES_TYPES[keyof typeof ISSUES_TYPES];
    description: string;
    severity: number;
};

export const issuesTypes: Issue[] = [
    {
        icon: "BlockOutlined",
        tag: ISSUES_TYPES.LOW_COUPLING,
        description: "Сильная связность модулей. Будет зарезолвлено в ближайшее время",
        severity: 4,
    },
    {
        icon: "CopyFilled",
        tag: ISSUES_TYPES.DRY,
        description: "Повторение логики. Присмотреться к вынесению в общеиспользуемое",
        severity: 2,
    },
    {
        icon: "StrikethroughOutlined",
        tag: ISSUES_TYPES.HARDCODED,
        description: "Захардкоженная логика",
        severity: 3,
    },
];

export const visibleLinesDelta = 3;

export const issues = {
    visibleLinesDelta,
    types: issuesTypes,
};

export const config = {
    docs,
    issues,
};

export function getIssueIcon(icon: IconType) {
    // FIXME: @temp
    return AntdIcon[icon] as import("types").IconComponent;
}

export function findIssue(issueTag: string) {
    return issues.types.find((type) => type.tag === issueTag);
}

export { PATHS };
