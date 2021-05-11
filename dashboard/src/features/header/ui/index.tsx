import { Layout } from "antd";
// import {
//     HeartOutlined,
//     ShoppingCartOutlined,
//     UserOutlined,
//     // FolderOpenOutlined,
//     MenuOutlined,
// } from "@ant-design/icons";
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
                {/* <Logo width={24} /> */}
                <h1 className={styles.logoTitle}>sharead</h1>
            </Link>
            <div className={styles.search}>SEARCH</div>
            <div className={styles.toolbar}>TOOLBAR</div>
        </Layout.Header>
    );
};

export default Header;
