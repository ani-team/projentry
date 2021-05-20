import { Typography, Layout, Row, Col, Divider } from "antd";
import { RouteChildrenProps } from "react-router-dom";

import { Header } from "features";
import { File } from "entities/file";
import { IssueRow, IssueCard, IssueStat } from "entities/issue";
import { NavBreadcrumb } from "entities/navigation";
import { dom } from "shared/lib";
import { PATHS, getFileIssueSnippets } from "shared/api";
import { issuesTypes, findIssue } from "shared/config";
import { Split } from "shared/ui";

type Props = RouteChildrenProps<{
    issueTag?: string;
}>;

/**
 * @page Страница проблем & тех.долга по проекту
 */
// eslint-disable-next-line max-lines-per-function
const IssuesPage = (props: Props) => {
    const { params } = props?.match || {};

    dom.useProjectTitle("Issues");

    const issue = params?.issueTag ? findIssue(params.issueTag) : undefined;

    return (
        <Split header={<Header />}>
            <Split.Main>
                <NavBreadcrumb />
                <Typography.Title className="mt-40" level={2}>
                    Issues
                </Typography.Title>
                <Layout className="mt-40">
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
                {!issue && <Split.Placeholder />}
            </Split.Sider>
        </Split>
    );
};

export default IssuesPage;
