import * as AntdIcon from "@ant-design/icons";
import type { ComponentType, SVGProps } from "react";

export const docs = {
    getStarted: {
        paths: ["/docs/get-started.md"],
    },
    conventions: {
        paths: ["/pages/readme.md", "/features/readme.md"],
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
    return AntdIcon[icon] as ComponentType<SVGProps<SVGSVGElement>>;
}

export function findIssue(issueTag: string) {
    return issues.types.find((type) => type.tag === issueTag);
}
