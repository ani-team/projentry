import { Typography, Layout, Row, Col, Breadcrumb, Divider } from "antd";
import { useLocation, Link } from "react-router-dom";
import Markdown from "react-markdown";

import { Header } from "features";
import * as topics from "entities/topic";
import { dom, string } from "shared/lib";
import { getDocs } from "shared/api";
import CodeRenderer from "./code-renderer";
import styles from "./styles.module.scss";

/**
 * @page Страница заглушка для топика
 */
// eslint-disable-next-line max-lines-per-function
const TopicPage = () => {
    const location = useLocation();
    const slug = location.pathname.slice(1);
    const topicName = string.unslugize(slug);
    dom.useTitle(`${topicName} — MyProj`);

    const topic = topics.findByTitleSlug(slug);

    return (
        <Layout className={styles.root}>
            <Header />
            <Row className={styles.rootContent}>
                <Col span={12} className={styles.main}>
                    <Breadcrumb>
                        <Breadcrumb.Item>
                            <Link to="/">MyProj</Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            {topic?.icon} <span>{topicName}</span>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    <Typography.Title style={{ marginTop: 40 }} level={2}>
                        {topicName}
                    </Typography.Title>
                    <Layout style={{ marginTop: 40 }}>{topic?.description}</Layout>
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
                    <Preview
                        title="features/auth/hooks/index.tsx"
                        text={getDocs().getStarted.authSnippet}
                    />
                    <Divider />
                    <Preview
                        title="features/origin/styles.scss"
                        text={getDocs().getStarted.styleSnippet}
                    />
                </Col>
            </Row>
        </Layout>
    );
};

const Preview = ({ title, text }: { title: string; text: string }) => (
    <div>
        <h2>{title}</h2>
        <Markdown
            allowDangerousHtml
            renderers={{ code: CodeRenderer }}
            /**
             * Github Flavored Markdown
             * @see https://github.com/remarkjs/react-markdown#use
             */
            // plugins={[gfm]}
            // {...uriTransformers}
        >
            {text}
        </Markdown>
    </div>
);

export default TopicPage;
