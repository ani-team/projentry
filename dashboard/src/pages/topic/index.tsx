import { Typography, Layout, Row, Col, Breadcrumb, Divider } from "antd";
import { useLocation, Link, RouteChildrenProps } from "react-router-dom";

import { Header } from "features";
// import * as topics from "entities/topic";
import { File } from "entities/file";
import { IssueRow, IssueCard, IssueStat } from "entities/issue";
import { dom, string } from "shared/lib";
import { PATHS, getFileIssueSnippets } from "shared/api";
import { issuesTypes, findIssue } from "shared/config";
import { Split } from "shared/ui";

type Props = RouteChildrenProps<{
    issueTag?: string;
}>;

/**
 * @page Страница заглушка для топика
 */
// eslint-disable-next-line max-lines-per-function
const TopicPage = (props: Props) => {
    const { params } = props?.match || {};

    const location = useLocation();
    const slug = location.pathname.slice(1);
    const topicName = string.unslugize(slug);
    dom.useTitle(`${topicName} | MyProj`);

    const issue = params?.issueTag ? findIssue(params.issueTag) : undefined;

    return (
        <Split header={<Header />}>
            <Split.Main>
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <Link to="/">MyProj</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>{topicName}</Breadcrumb.Item>
                </Breadcrumb>
                <Typography.Title style={{ marginTop: 40 }} level={2}>
                    {topicName}
                </Typography.Title>
                <Layout style={{ marginTop: 40 }}>
                    <Row gutter={[0, 20]}>
                        {issuesTypes.map((issueType) => (
                            <Col key={issueType.tag} span={24}>
                                <IssueRow data={issueType} active={issueType.tag === issue?.tag} />
                            </Col>
                        ))}
                    </Row>
                </Layout>
            </Split.Main>
            <Split.Sider>
                {issue && (
                    <>
                        <IssueCard data={issue} />
                        <IssueStat data={issue} />
                        <Divider />
                        <div>
                            {Object.values(PATHS).map((pathname) => (
                                <File.Preview
                                    key={pathname}
                                    pathname={pathname}
                                    content={
                                        getFileIssueSnippets(pathname, issue?.tag || "")
                                            .issueSnippets
                                    }
                                />
                            ))}
                        </div>
                    </>
                )}
            </Split.Sider>
        </Split>
    );
};

export default TopicPage;
