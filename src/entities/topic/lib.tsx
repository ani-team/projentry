import {
    RocketOutlined,
    WarningOutlined,
    ApiOutlined,
    QuestionCircleOutlined,
    FileSearchOutlined,
    ToolOutlined,
} from "@ant-design/icons";
import type { ReactNode } from "react";
import { string } from "shared/lib";

export type Topic = {
    title: string;
    description: string;
    icon: ReactNode;
    href: string;
};

export const GET_STARTED: Topic = {
    title: "Get Started",
    description: "Onboarding, setup env, quick-start",
    icon: <RocketOutlined style={{ fontSize: 20 }} />,
    href: "/docs/get-started",
};
export const CONVENTIONS: Topic = {
    title: "Conventions",
    description: "Code, structure, architecture",
    icon: <ApiOutlined style={{ fontSize: 20 }} />,
    href: "/docs/conventions",
};

export const FAQ: Topic = {
    title: "FAQ",
    description: "Frequently Asked Questions",
    icon: <QuestionCircleOutlined style={{ fontSize: 20 }} />,
    href: "/docs/faq",
};

export const HEALTH: Topic = {
    title: "Health",
    description: "Issues tech debt, backlog",
    icon: <WarningOutlined style={{ fontSize: 20 }} />,
    // icon: <BugOutlined style={{ fontSize: 20 }} />,
    href: "/health",
};

export const TECH: Topic = {
    title: "Tech",
    description: "Tech stack, dependencies",
    icon: <ToolOutlined style={{ fontSize: 20 }} />,
    href: "/tech",
};

export const EXPLORER: Topic = {
    title: "Explorer",
    description: "Project map, inner READMEs",
    icon: <FileSearchOutlined style={{ fontSize: 20 }} />,
    href: "/explorer",
};

// prettier-ignore
export const topics: Topic[] = [
    GET_STARTED,
    CONVENTIONS,
    FAQ,
    HEALTH,
    TECH,
    EXPLORER,
];

export const findByTitleSlug = (term: string) => {
    return topics.find((t) => string.slugize(t.title) === term);
};
