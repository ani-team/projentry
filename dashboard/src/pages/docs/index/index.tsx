import { Typography, Layout, Card, Col, Row } from "antd";
import cn from "classnames";
import { Link } from "react-router-dom";

import { Header } from "features";
import { NavBreadcrumb } from "entities/navigation";
import { dom } from "shared/lib";
import { Split } from "shared/ui";
import { routes } from "../routes";
import styles from "./styles.module.scss";

// eslint-disable-next-line max-lines-per-function
const IndexPage = () => {
    dom.useProjectTitle(`Documentation`);

    return (
        <Split header={<Header />}>
            <Split.Main>
                <NavBreadcrumb />
                <Typography.Title className="mt-40" level={2}>
                    Documentation
                </Typography.Title>
                <Layout className="mt-40">
                    <Row gutter={[0, 20]}>
                        {/* FIXME: @dry @shareable */}
                        {routes.map((route) => (
                            <Col
                                key={route.title}
                                span={24}
                                className={cn(route.disabled && styles.itemDisabled)}
                            >
                                <Link to={route.href}>
                                    <Card title={route.title} hoverable>
                                        <p>{route.description}</p>
                                    </Card>
                                </Link>
                            </Col>
                        ))}
                    </Row>
                </Layout>
            </Split.Main>
            <Split.Sider>
                <Split.Placeholder title="Select section for continue" />
            </Split.Sider>
        </Split>
    );
};

export default IndexPage;
