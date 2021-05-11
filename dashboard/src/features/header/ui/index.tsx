import { Layout } from "antd";
import { QqOutlined } from "@ant-design/icons";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

type Props = {
    // stickable?: boolean;
    className?: string;
    // theme?: "normal" | "transparent";
};

const Header = (props: Props) => {
    const { className } = props;

    return (
        <Layout.Header className={cn(styles.root, className)}>
            <Link className={styles.logo} to="/">
                <QqOutlined style={{ fontSize: 24 }} />
                <h1 className={styles.logoTitle}>projentry</h1>
            </Link>
            <div className={styles.search}>SEARCH</div>
            <div className={styles.toolbar}>TOOLBAR</div>
        </Layout.Header>
    );
};

export default Header;
