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
};

export const topics: Topic[] = [
    {
        title: "Get Started",
        description: "Onboarding, setup env, quick-start",
        icon: <RocketOutlined style={{ fontSize: 20 }} />,
    },
    {
        title: "Health",
        description: "Issues tech debt, backlog",
        icon: <WarningOutlined style={{ fontSize: 20 }} />,
        // icon: <BugOutlined style={{ fontSize: 20 }} />,
    },
    {
        title: "FAQ",
        description: "Frequently Asked Questions",
        icon: <QuestionCircleOutlined style={{ fontSize: 20 }} />,
    },
    {
        title: "Conventions",
        description: "Code, structure, architecture",
        icon: <ApiOutlined style={{ fontSize: 20 }} />,
    },
    {
        title: "Tech",
        description: "Tech stack, dependencies",
        icon: <ToolOutlined style={{ fontSize: 20 }} />,
    },
    {
        title: "Explorer",
        description: "Project map, inner READMEs",
        icon: <FileSearchOutlined style={{ fontSize: 20 }} />,
    },
];

export const findByTitleSlug = (term: string) => {
    return topics.find((t) => string.slugize(t.title) === term);
};
