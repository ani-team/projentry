import { Card, Row, Col, Result, Badge, Statistic } from "antd";
import cn from "classnames";
import { Link } from "react-router-dom";

import { getIssueIcon } from "shared/config";
import type { Issue } from "shared/config";
import styles from "./styles.module.scss";

type Props = {
    data: Issue;
};

// export const Row = ({ tag }: Props) => {
//     const issue = findIssue(tag);

//     if (!issue) return <Result status="warning" title={`Unknown issue: ${tag}`} />;

//     const Icon = getIssueIcon(issue.icon);

//     return (
//
//     );
// };

const SEVERITY_LABEL: Record<number, string> = {
    1: "LOW",
    2: "MEDIUM",
    3: "HIGH",
    4: "CRITICAL",
    5: "BLOCKER",
};

const SEVERITY_COLOR: Record<number, string> = {
    1: "blue",
    2: "gold",
    3: "#f50",
    4: "red",
    5: "pink",
};

export const IssueCard = ({ data }: Props) => {
    const Icon = getIssueIcon(data.icon);
    return (
        <Result
            icon={<Icon style={{ color: SEVERITY_COLOR[data.severity] }} />}
            title={data.tag}
            subTitle={data.description}
        />
    );
};

const MAX_SPAN = 24;
export const IssueStat = ({ data }: Props) => {
    const stats = [
        // @hardcoded
        { title: "Occurences", value: 11, valueStyle: {} },
        {
            title: "Severity",
            value: SEVERITY_LABEL[data.severity],
            valueStyle: { color: SEVERITY_COLOR[data.severity] },
        },
        // @hardcoded
        { title: "How long ago", value: "3 months", valueStyle: {} },
    ];
    return (
        <Row>
            {stats.map((stat) => (
                <Col key={stat.title} span={MAX_SPAN / stats.length}>
                    <Card>
                        <Statistic {...stat} />
                    </Card>
                </Col>
            ))}
        </Row>
    );
};

export const IssueRowView = ({ data }: Props) => {
    const Icon = getIssueIcon(data.icon);

    return (
        <Row align="middle">
            <Col span={4}>
                <Icon className={styles.icon} />
            </Col>
            <Col span={20}>
                <h3>
                    <Link to={`/health/issues/${data.tag}`}>{data.tag}</Link>
                </h3>

                <span>{data.description}</span>
            </Col>
        </Row>
    );
};

type RowProps = Props & {
    active?: boolean;
};
export const IssueRow = ({ data, active }: RowProps) => {
    return (
        <Badge.Ribbon
            color={SEVERITY_COLOR[data.severity]}
            placement="end"
            text={`Severity: ${SEVERITY_LABEL[data.severity]}`}
        >
            <Card className={cn(styles.row, { [styles.rowActive]: active })}>
                <IssueRowView data={data} />
            </Card>
        </Badge.Ribbon>
    );
};
