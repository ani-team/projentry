import { Typography, Layout, Row, Col, Divider } from "antd";
import { FileFilled } from "@ant-design/icons";
import { useLocation } from "react-router-dom";

import { Header } from "features";
import * as topic from "entities/topic";
import { NavBreadcrumb } from "entities/navigation";
import { dom } from "shared/lib";
import { docs } from "shared/config";
import type { DocSection } from "shared/config";
import { Split, RowCard } from "shared/ui";

// FIXME: @temp
const topicsMap: Record<string, topic.Topic> = {
    "get-started": topic.GET_STARTED,
    "conventions": topic.CONVENTIONS,
    "faq": topic.FAQ,
};
// FIXME: @temp
const articlesMap: Record<string, DocSection> = {
    "get-started": docs.getStarted,
    "conventions": docs.conventions,
    "faq": docs.faq,
};

const useSection = () => {
    // FIXME: @temp move to entities/navigation
    const location = useLocation();
    const slug = location.pathname.split("/").pop()!;
    const section = topicsMap[slug];
    const articles = articlesMap[slug];
    return { section, articles };
};

// FIXME: @hardcoded @temp
// eslint-disable-next-line max-lines-per-function
const SectionPage = () => {
    const { section, articles } = useSection();

    dom.useProjectTitle(section.title);

    return (
        <Split header={<Header />}>
            <Split.Main>
                <NavBreadcrumb />
                <Typography.Title className="mt-40" level={2}>
                    {section.title}
                </Typography.Title>
                <Typography.Text type="secondary">{section.description}</Typography.Text>
                <Layout className="mt-40">
                    <Row gutter={[0, 20]}>
                        {articles.paths.map((path) => (
                            <Col key={path} span={24}>
                                {/* TODO: add active logic */}
                                {/* TODO: add article detect logic */}
                                <RowCard Icon={FileFilled as any} subtitle={path} title={path} />
                            </Col>
                        ))}
                    </Row>
                </Layout>
            </Split.Main>
            <Split.Sider>
                {/* {issue && (
                    <article>
                        <IssueCard data={issue} />
                        <IssueStat data={issue} />
                        <Divider />
                        <Row gutter={[0, 20]}>
                            {Object.values(PATHS.CODE).map((pathname) => (
                                <Col key={pathname} span={24}>
                                    <File.Preview
                                        pathname={pathname}
                                        content={
                                            getFileIssueSnippets(pathname, issue?.tag || "")
                                                .issueSnippets
                                        }
                                    />
                                </Col>
                            ))}
                        </Row>
                    </article>
                )}
                {!issue && <Split.Placeholder title="Select doc for continue" />} */}
            </Split.Sider>
        </Split>
    );
};

export default SectionPage;
