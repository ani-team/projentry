import { Card, Row, Col } from "antd";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

type BaseProps = {
    title: import("react").ReactNode;
    subtitle: import("react").ReactNode;
    Icon: import("types").IconComponent;
};

export const RowCardView = ({ Icon, subtitle, title }: BaseProps) => {
    return (
        <Row align="middle">
            <Col span={4}>
                <Icon className={styles.icon} />
            </Col>
            <Col span={20}>
                <h3>{title}</h3>

                <span>{subtitle}</span>
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
        <Link to={href || ""}>
            <Card className={cn(active && "ant-card--active")} hoverable>
                <RowCardView {...baseProps} />
            </Card>
        </Link>
    );
};
