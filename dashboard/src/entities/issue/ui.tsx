import { Card, Row, Col, Result, Badge, Statistic } from "antd";

import { getIssueIcon } from "shared/config";
import type { Issue } from "shared/config";
import { RowCard } from "shared/ui";

type BaseProps = {
    data: Issue;
};

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

export const IssueCard = ({ data }: BaseProps) => {
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
export const IssueStat = ({ data }: BaseProps) => {
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

type RowProps = BaseProps & {
    active?: boolean;
};
export const IssueRow = ({ data, active }: RowProps) => {
    return (
        <Badge.Ribbon
            color={SEVERITY_COLOR[data.severity]}
            placement="end"
            text={`Severity: ${SEVERITY_LABEL[data.severity]}`}
        >
            <RowCard
                // FIXME: @hardcoded
                href={`/health/issues/${data.tag}`}
                Icon={getIssueIcon(data.icon)}
                title={data.tag}
                subtitle={data.description}
                active={active}
            />
        </Badge.Ribbon>
    );
};
