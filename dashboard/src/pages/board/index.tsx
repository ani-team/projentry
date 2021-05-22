import { Typography, Layout, Card, Row, Col } from "antd";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import { Header } from "features";
import { topics } from "entities/topic";
import { dom } from "shared/lib";
import { PROJECT_NAME } from "shared/config";
// import rpc from "shared/rpc";
import styles from "./styles.module.scss";

/**
 * @page Дашборд страница
 */
const BoardPage = () => {
    dom.useProjectTitle("Dashboard");

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
                    {PROJECT_NAME}
                </Typography.Title>
                <Typography.Title className={styles.title} level={4} type="secondary">
                    Project dashboard
                </Typography.Title>
                <Layout className={styles.content}>
                    <Row className={styles.topics} gutter={[20, 20]}>
                        {topics.map((t) => (
                            <Col key={t.title} span={8}>
                                <Link to={t.href} style={{ width: "100%" }}>
                                    {/* FIXME: @dangerAccess move to topics */}
                                    <Card title={t.title} extra={t.icon} hoverable type="inner">
                                        <p>{t.description}</p>
                                    </Card>
                                </Link>
                            </Col>
                        ))}
                    </Row>
                </Layout>
            </Layout.Content>
        </Layout>
    );
};

export default BoardPage;
