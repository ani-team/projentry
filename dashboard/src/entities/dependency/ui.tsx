import { Card, Empty, Row, Col, Skeleton } from "antd";
import Icon from "@ant-design/icons";
import { Link } from "react-router-dom";

import { npm } from "shared/api";
import { GithubMarkdown } from "shared/ui";
import { requests } from "shared/lib";
import { ReactComponent as IconTypescript } from "./typescript.svg";

type Dependency = {
    name: string;
    version: string;
};

type Props = {
    data: Dependency;
};

export const DependencyItem = ({ data }: Props) => {
    const isTypesPackage = data.name.startsWith("@types/");

    return (
        <Card
            title={data.name}
            hoverable
            extra={
                isTypesPackage && (
                    <Icon component={IconTypescript} style={{ color: "lightslategray" }} />
                )
            }
        >
            {data.version}
        </Card>
    );
};

// FIXME: @tooComplexity
export const DependencyCard = ({ data }: Props) => {
    const query = requests.useRequest<npm.PackageResponse>(
        () => npm.getPackage(data.name),
        data.name,
    );

    const { metadata } = query.data?.collected || {};
    const readme = metadata?.readme;
    const repoUrl = metadata?.links.repository;

    return (
        <article>
            {/* TODO: add links and other info */}
            <Card
                title={data.name}
                extra={data.version}
                bodyStyle={{ minHeight: 500, overflow: "hidden" }}
                // cover={
                //     <img
                //         alt="example"
                //         src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                //     />
                // }
            >
                <Skeleton loading={query.loading} active paragraph={{ rows: 12 }}>
                    {readme && <GithubMarkdown text={readme} repoUrl={repoUrl} />}
                    {!readme && (
                        <Row align="middle" justify="center" style={{ minHeight: 500 }}>
                            <Empty description="No readme" />
                        </Row>
                    )}
                </Skeleton>
            </Card>
        </article>
    );
};

// FIXME: @hardcoded @decompose
type GroupProps = {
    items: Dependency[];
};

export const DependencyGroup = ({ items }: GroupProps) => {
    return (
        <Row gutter={[10, 10]} className="mt-20">
            {items.map((data) => (
                <Col key={data.name} span={8}>
                    {/* FIXME: @hardcoded */}
                    <Link to={`/tech/${encodeURIComponent(data.name)}`}>
                        <DependencyItem data={data} />
                    </Link>
                </Col>
            ))}
        </Row>
    );
};
