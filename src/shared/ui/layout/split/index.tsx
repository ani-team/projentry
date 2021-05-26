import { Layout, Row, Col, Empty } from "antd";
import type { ReactNode, FC } from "react";

import styles from "./styles.module.scss";

type Props = {
    header?: ReactNode;
};

type Subcomponents = {
    Main: typeof Main;
    Sider: typeof Sider;
    Placeholder: typeof Placeholder;
};

const Split: FC<Props> & Subcomponents = ({ header, children }) => {
    return (
        <Layout className={styles.root}>
            {header}
            <Row className={styles.rootContent}>{children}</Row>
        </Layout>
    );
};

const Main: FC = ({ children }) => (
    <Col span={12} className={styles.main}>
        {children}
    </Col>
);

const Sider: FC = ({ children }) => (
    <Col span={12} className={styles.sider}>
        {children}
    </Col>
);

const Placeholder: FC<{ title?: string }> = ({ title = "Select section for continue" }) => (
    <Row className="h100" align="middle" justify="center">
        <Empty description={title} />
    </Row>
);

Split.Main = Main;
Split.Sider = Sider;
Split.Placeholder = Placeholder;

export { Split };
