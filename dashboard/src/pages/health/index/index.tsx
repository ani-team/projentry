import { Typography, Layout, Breadcrumb } from "antd";
import { useLocation, Link } from "react-router-dom";

import { Header } from "features";
import * as topics from "entities/topic";
import { dom, string } from "shared/lib";
import { Split } from "shared/ui";

/**
 * @page Страница заглушка для топика
 */
// eslint-disable-next-line max-lines-per-function
const TopicPage = () => {
    const location = useLocation();
    const slug = location.pathname.slice(1);
    const topicName = string.unslugize(slug);
    dom.useTitle(`${topicName} | MyProj`);

    const topic = topics.findByTitleSlug(slug);

    return (
        <Split header={<Header />}>
            <Split.Main>
                <Typography.Title className="mt-40" level={2}>
                    Project Health
                </Typography.Title>
                <Layout className="mt-40">{topic?.description}</Layout>
            </Split.Main>
            <Split.Sider>Выберите страницу для продолжения</Split.Sider>
        </Split>
    );
};

export default TopicPage;
