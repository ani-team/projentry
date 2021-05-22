import { Card, Row, Col } from "antd";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

type BaseProps = {
    title: import("react").ReactNode;
    subtitle: import("react").ReactNode;
    Icon: import("types").IconComponent;
    col1Style?: import("react").CSSProperties;
    col2Style?: import("react").CSSProperties;
};

export const RowCardView = ({ Icon, subtitle, title, col1Style, col2Style }: BaseProps) => {
    return (
        <Row align="middle">
            <Col span={4} style={col1Style}>
                <Icon className={styles.icon} />
            </Col>
            <Col span={20} style={col2Style}>
                <h3>{title}</h3>

                {/* NOTE: [type=secondary] не подходит, т.к. нам надо скрывать и md-разметку */}
                <span className={styles.subtitle}>{subtitle}</span>
            </Col>
        </Row>
    );
};

type Props = BaseProps & {
    active?: boolean;
    href?: string;
};
export const RowCard = ({ href, active, ...baseProps }: Props) => {
    return (
        // FIXME: @temp @hardcoded
        <Link to={href || "#"}>
            <Card className={cn(active && "ant-card--active")} hoverable>
                <RowCardView {...baseProps} />
            </Card>
        </Link>
    );
};
