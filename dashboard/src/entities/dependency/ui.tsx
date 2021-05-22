import { Card, Empty, Row, Col, Typography, Skeleton } from "antd";
import { Link } from "react-router-dom";

import { GithubMarkdown } from "shared/ui";
import { requests } from "shared/lib";

type Dependency = {
    name: string;
    version: string;
};

type Props = {
    data: Dependency;
};

type User = {
    name?: string;
    email?: string;
    username?: string;
};

// FIXME: @hardcoded
type DependencyResponse = {
    analyzedAt: string;
    collected: {
        metadata: {
            name: string;
            version: string;
            description: string;
            keywords: string[];
            date: string;
            author: User;
            publisher: User;
            maintainers: User[];
            links: {
                npm: string;
                homepage?: string;
                repository?: string;
                bugs?: string;
            };
            license: string;
            readme?: string;
        };
    };
};

export const DependencyItem = ({ data }: Props) => {
    return (
        <Card title={data.name} hoverable>
            {data.version}
        </Card>
    );
};

type GroupProps = {
    title: string;
    items: Dependency[];
};

export const DependencyGroup = ({ items, title }: GroupProps) => {
    return (
        <section>
            <Typography.Title level={3}>{title}</Typography.Title>
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
        </section>
    );
};

// FIXME: @tooComplexity
export const DependencyCard = ({ data }: Props) => {
    const dependencyURI = encodeURIComponent(data.name);
    const query = requests.useRequest<DependencyResponse>(
        () => fetch(`https://api.npms.io/v2/package/${dependencyURI}`).then((r) => r.json()),
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
