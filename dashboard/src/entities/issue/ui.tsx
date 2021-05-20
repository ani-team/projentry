import { Card, Row, Col, Result } from "antd";
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

export const IssueCard = ({ data }: Props) => {
    const Icon = getIssueIcon(data.icon);
    return <Result icon={<Icon />} status="warning" title={data.tag} subTitle={data.description} />;
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

export const IssueRow = ({ data }: Props) => {
    return (
        <Card hoverable className={styles.row}>
            <IssueRowView data={data} />
        </Card>
    );
};
