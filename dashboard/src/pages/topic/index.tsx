import { Typography, Layout, Row, Col, Breadcrumb, Divider } from "antd";
import { useLocation, Link, RouteChildrenProps } from "react-router-dom";

import { Header } from "features";
// import * as topics from "entities/topic";
import { File } from "entities/file";
import { IssueRow, IssueCard, IssueStat } from "entities/issue";
import { dom, string } from "shared/lib";
import { PATHS, getFileIssueSnippets } from "shared/api";
import { issuesTypes, findIssue } from "shared/config";
import styles from "./styles.module.scss";

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
    dom.useTitle(`${topicName} — MyProj`);

    const issue = params?.issueTag ? findIssue(params.issueTag) : undefined;
    // const issue = findIssue(ISSUES_TYPES.LOW_COUPLING);
    // const topic = topics.findByTitleSlug(slug);

    return (
        <Layout className={styles.root}>
            <Header />
            <Row className={styles.rootContent}>
                <Col span={12} className={styles.main}>
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
                                    <IssueRow data={issueType} />
                                </Col>
                            ))}
                        </Row>
                    </Layout>
                </Col>
                {/* <Col span={12} className={styles.sider}>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nostrum eius
                        perspiciatis libero sed ratione nisi molestiae reprehenderit! Dolorem at et
                        architecto iste praesentium, earum fugiat ullam voluptate fugit cupiditate
                        soluta veritatis sit ipsam autem odio iusto quisquam quas reprehenderit,
                        ipsa assumenda id eum! Atque nisi molestias voluptatem beatae ipsam
                        repudiandae possimus vitae quis veniam.
                    </p>
                    <p>
                        Soluta provident perferendis sapiente quasi porro sequi voluptatem
                        reprehenderit nobis id ipsa nemo, repellendus est debitis ab, officia
                        repellat atque magni optio quo. Aperiam dolor sit sapiente vitae repellat
                        magni beatae libero aut provident odit recusandae a assumenda tempore
                        inventore illum corrupti doloribus vel voluptatem voluptatibus, magnam sequi
                        aspernatur amet. Quam alias qui tempore, hic aspernatur aliquid quidem saepe
                        pariatur, itaque deserunt cupiditate dolore quia voluptas optio. Distinctio
                        similique incidunt consectetur totam eum! Autem dolores facilis placeat
                        voluptatem nemo, a nisi? Laudantium, quaerat explicabo.{" "}
                    </p>
                    <p>
                        Repellendus, dolor nostrum cumque nisi aliquid ullam sint fugit? Quas
                        asperiores veritatis totam numquam quo quisquam commodi ratione animi
                        dolorum! Pariatur quisquam odio laboriosam, in inventore soluta praesentium
                        eveniet! Repellat perferendis nam veritatis eaque doloremque assumenda
                        exercitationem aperiam suscipit minima minus ad modi ex totam corporis, in
                        rerum hic dolorum. Neque atque rem ullam accusantium explicabo quod maiores
                        ea, odit quae?
                    </p>
                </Col> */}
                <Col span={12} className={styles.sider}>
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

                    {/* <File.LazyPreview pathname={PATHS.AUTH_HOOK} />
                    <File.LazyPreview pathname={PATHS.STYLES_1} /> */}
                </Col>
            </Row>
        </Layout>
    );
};

export default TopicPage;
