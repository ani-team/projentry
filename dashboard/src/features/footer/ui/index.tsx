import { Layout } from "antd";
import styles from "./styles.module.scss";

const Footer = () => (
    <Layout.Footer className={styles.root}>
        Projentry ©2021 Created by{" "}
        <a href="https://github.com/ani-team" target="_blank" rel="noreferrer">
            Ani-Team
        </a>
    </Layout.Footer>
);

export default Footer;
