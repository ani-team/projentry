import { Typography, Layout, Row, Col, Divider } from "antd";
import { useLocation } from "react-router-dom";

import { Header } from "features";
import { File } from "entities/file";
import * as topic from "entities/topic";
import { NavBreadcrumb } from "entities/navigation";
import { dom } from "shared/lib";
import { getFileIssueSnippets } from "shared/api";
import { issuesTypes, findIssue, PATHS } from "shared/config";
import { Split } from "shared/ui";

// FIXME: @temp
const topicsMap: Record<string, topic.Topic> = {
    "get-started": topic.GET_STARTED,
    "conventions": topic.CONVENTIONS,
    "faq": topic.FAQ,
};

const useSection = () => {
    // FIXME: @temp move to entities/navigation
    const location = useLocation();
    const slug = location.pathname.split("/").pop()!;
    return topicsMap[slug];
};

// FIXME: @hardcoded @temp
// eslint-disable-next-line max-lines-per-function
const SectionPage = () => {
    const section = useSection();
    dom.useProjectTitle(section.title);

    return (
        <Split header={<Header />}>
            <Split.Main>
                <NavBreadcrumb />
                <Typography.Title className="mt-40" level={2}>
                    {section.title}
                </Typography.Title>
                <Layout className="mt-40">
                    {section.description}
                    {/* <Row gutter={[0, 20]}>
                        {issuesTypes.map((issueType) => (
                            <Col key={issueType.tag} span={24}>
                                <IssueRow data={issueType} active={issueType.tag === issue?.tag} />
                            </Col>
                        ))}
                    </Row> */}
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
