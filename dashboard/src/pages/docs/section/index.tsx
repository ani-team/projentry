import { Typography, Layout, Row, Col } from "antd";
import { FileFilled } from "@ant-design/icons";

import { Header } from "features";
import * as topic from "entities/topic";
import { NavBreadcrumb } from "entities/navigation";
import { articleLib, ArticlePreview } from "entities/article";
import { dom } from "shared/lib";
import { docs } from "shared/config";
import { Split, RowCard } from "shared/ui";

type Props = import("react-router-dom").RouteChildrenProps<{
    section: string;
    article?: string;
}>;

// FIXME: @temp
const topicsMap: Record<string, topic.Topic> = {
    "get-started": topic.GET_STARTED,
    "conventions": topic.CONVENTIONS,
    "faq": topic.FAQ,
};
// FIXME: @temp
const articlesMap: Record<string, import("shared/config").DocSection> = {
    "get-started": docs.getStarted,
    "conventions": docs.conventions,
    "faq": docs.faq,
};

// FIXME: @complexity @decompose
const useRouteMapping = (props: Props) => {
    const routeParams = props.match!.params;
    const sectionSlug = routeParams.section;
    const articleSlug = routeParams.article ? decodeURIComponent(routeParams.article) : undefined;

    // FIXME: @temp move to entities/navigation
    const section = topicsMap[sectionSlug];
    const articles = articlesMap[sectionSlug];
    return {
        data: { section, articles },
        route: { sectionSlug, articleSlug },
    };
};

// FIXME: @hardcoded @temp
// eslint-disable-next-line max-lines-per-function
const SectionPage = (props: Props) => {
    const { data, route } = useRouteMapping(props);
    dom.useProjectTitle(data.section.title);

    return (
        <Split header={<Header />}>
            <Split.Main>
                <NavBreadcrumb />
                <Typography.Title className="mt-40" level={2}>
                    {data.section.title}
                </Typography.Title>
                <Typography.Text type="secondary">{data.section.description}</Typography.Text>
                <Layout className="mt-40">
                    <Row gutter={[0, 20]}>
                        {data.articles.paths.map((path) => (
                            <Col key={path} span={24}>
                                {/* TODO: add active logic */}
                                {/* TODO: add article detect logic */}
                                <RowCard
                                    Icon={FileFilled as any}
                                    title={articleLib.getTitle(path)}
                                    subtitle={articleLib.getSummary(path)}
                                    href={`/docs/${route.sectionSlug}/${encodeURIComponent(path)}`}
                                    active={route.articleSlug === path}
                                />
                            </Col>
                        ))}
                    </Row>
                </Layout>
            </Split.Main>
            <Split.Sider>
                {/* FIXME: @decompose move to /entities/article */}
                {route.articleSlug && <ArticlePreview pathname={route.articleSlug} />}
                {!route.articleSlug && <Split.Placeholder title="Select article for continue" />}
            </Split.Sider>
        </Split>
    );
};

export default SectionPage;
