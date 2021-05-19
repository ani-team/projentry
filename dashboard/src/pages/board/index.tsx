import { Typography, Layout, Card, Row, Col } from "antd";
import {
    RocketOutlined,
    BugOutlined,
    ApiOutlined,
    QuestionCircleOutlined,
} from "@ant-design/icons";
import { useEffect } from "react";
import type { ReactNode } from "react";

import { Header, Footer } from "features";
import { dom } from "shared/lib";
// import rpc from "shared/rpc";
import styles from "./styles.module.scss";

type Topic = {
    title: string;
    description: string;
    icon: ReactNode;
};

const topics: Topic[] = [
    {
        title: "Get Started",
        description: "Onboaridng, setup env, ...",
        icon: <RocketOutlined style={{ fontSize: 20 }} />,
    },
    {
        title: "Project Health",
        description: "Issues, backlog, tech debt ...",
        // icon: <WarningOutlined style={{ fontSize: 20 }} />,
        icon: <BugOutlined style={{ fontSize: 20 }} />,
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
];

/**
 * @page Дашборд страница
 */
const BoardPage = () => {
    dom.useTitle("Dashboard — MyProj");
    useEffect(() => {
        // (async () => {
        //     /* eslint-disable-next-line no-console */
        //     console.trace(`await rpc.testFunc(34, 42) = ${await rpc.testFunc(34, 42)}`);
        // })();
    }, []);

    return (
        <Layout>
            <Header />
            <Layout.Content className={styles.root}>
                <Typography.Title className={styles.title} level={2}>
                    MyProj
                </Typography.Title>
                <Typography.Title className={styles.title} level={4} type="secondary">
                    Project dashboard
                </Typography.Title>
                <Layout className={styles.content}>
                    <Row className={styles.topics} gutter={[20, 20]}>
                        {topics.map((t) => (
                            <Col key={t.title} span={12}>
                                <Card title={t.title} extra={t.icon} hoverable>
                                    <p>{t.description}</p>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Layout>
            </Layout.Content>
            <Footer />
        </Layout>
    );
};

export default BoardPage;
