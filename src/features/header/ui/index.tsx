import { Layout, Switch, Row, AutoComplete, Input } from "antd";
import Icon, { QqOutlined, GithubFilled } from "@ant-design/icons";
import cn from "classnames";
import { Link } from "react-router-dom";

import { ReactComponent as IconMoon } from "./moon.svg";
import { ReactComponent as IconSun } from "./sun.svg";
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
            <Row align="middle" className={styles.search}>
                <AutoComplete options={[]} style={{ width: "100%" }}>
                    <Input.Search size="large" placeholder="Search ..." enterButton allowClear />
                </AutoComplete>
            </Row>
            <Row align="middle">
                <Switch
                    className={styles.switch}
                    checkedChildren={<Icon component={IconMoon} className={styles.switchIcon} />}
                    unCheckedChildren={<Icon component={IconSun} className={styles.switchIcon} />}
                    disabled
                />
                <a
                    className={styles.github}
                    href="https://github.com/ani-team"
                    target="_blank"
                    rel="noreferrer"
                >
                    <GithubFilled style={{ fontSize: 30 }} />
                </a>
            </Row>
        </Layout.Header>
    );
};

export default Header;
