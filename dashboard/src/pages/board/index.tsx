import { Typography, Layout } from "antd";

// import { Header, Footer } from "features";
import { dom } from "shared/lib";
import styles from "./styles.module.scss";

// !!! FIXME: split by features!
// TODO: Add skeletons loader

/**
 * @page Дешборд страница
 */
const BoardPage = () => {
    dom.useTitle("Dashboard — MyProj");

    return (
        <Layout>
            {/* <Header /> */}
            <Layout.Content className={styles.root}>
                <Typography.Title className={styles.title} level={2}>
                    MyProj
                </Typography.Title>
                <Layout className={styles.catalog}>...</Layout>
            </Layout.Content>
            {/* <Footer /> */}
        </Layout>
    );
};

export default BoardPage;
