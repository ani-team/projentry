import { Typography, Layout, Card, Row, Col } from "antd";

import { Header } from "features";
import { topics } from "entities/topic";
import { dom } from "shared/lib";
import styles from "./styles.module.scss";

/**
 * @page Дашборд страница
 */
const BoardPage = () => {
    dom.useTitle("Dashboard — MyProj");

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
                            <Col key={t.title} span={8}>
                                <Card title={t.title} extra={t.icon} hoverable>
                                    <p>{t.description}</p>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Layout>
            </Layout.Content>
        </Layout>
    );
};

export default BoardPage;
