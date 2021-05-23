import { Card, Empty, Row, Col, Skeleton, Typography, Descriptions } from "antd";
import cn from "classnames";
import Icon, { GithubOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import type { CSSProperties } from "react";
import { npmApi } from "shared/api";
import { GithubMarkdown } from "shared/ui";
import { requests } from "shared/lib";
import * as lib from "./lib";
import { ReactComponent as IconTypescript } from "./typescript.svg";
import { ReactComponent as IconNpm } from "./npm.svg";

// FIXME: @decompose

type Dependency = {
    name: string;
    version: string;
};

type Props = {
    data: Dependency;
    active?: boolean;
};

const ITEM_STYLE: Record<string, CSSProperties> = {
    default: {},
    types: { color: "rgba(119, 136, 153, 0.5)" },
};

export const DependencyItem = ({ data, active }: Props) => {
    const isTypesPackage = data.name.startsWith("@types/");
    const variant = isTypesPackage ? "types" : "default";

    return (
        <Card
            className={cn(active && "ant-card--active")}
            title={data.name}
            headStyle={ITEM_STYLE[variant]}
            bodyStyle={ITEM_STYLE[variant]}
            hoverable
            extra={
                isTypesPackage && <Icon component={IconTypescript} style={ITEM_STYLE[variant]} />
            }
        >
            {data.version}
        </Card>
    );
};

// FIXME: @tooComplexity @decompose
// eslint-disable-next-line max-lines-per-function
export const DependencyCard = ({ data }: Props) => {
    // FIXME: @hardcoded
    const query = requests.useRequest<npmApi.PackageResponse>(
        () => npmApi.getPackage(data.name),
        data.name,
    );

    const { metadata, npm } = query.data?.collected || {};
    const readme = metadata?.readme;
    const repoUrl = metadata?.links.repository;
    const repoUri = repoUrl ? lib.parseRepoUri(repoUrl) : undefined;

    return (
        <Card
            title={
                <span>
                    <Typography.Text>{data.name}</Typography.Text>{" "}
                    <Typography.Text type="secondary">({data.version})</Typography.Text>
                </span>
            }
            extra={query.data && <ExternalLinks {...query.data} />}
        >
            {/* TODO: add more details */}
            {/* FIXME: @decompose */}
            <Card type="inner" title="General">
                <Skeleton loading={query.debouncedLoading} active paragraph={{ rows: 20 }}>
                    <article className="border border--accent">
                        {repoUri && (
                            <img src={lib.getPreviewUrl(repoUri)} alt="repo-preview" width="100%" />
                        )}
                    </article>
                    <Descriptions bordered column={1}>
                        <Descriptions.Item label="Description">
                            {metadata?.description}
                        </Descriptions.Item>
                        <Descriptions.Item label="Version">{metadata?.version}</Descriptions.Item>
                        <Descriptions.Item label="License">{metadata?.license}</Descriptions.Item>
                        <Descriptions.Item label="Downloads">
                            {npm?.downloads[1].count} (last week)
                        </Descriptions.Item>
                        <Descriptions.Item label="Keywords">
                            {(metadata?.keywords || []).map((keyword) => (
                                // TODO: filter deps by keyword
                                <Typography.Text key={keyword} code>
                                    {keyword}
                                </Typography.Text>
                            ))}
                        </Descriptions.Item>
                    </Descriptions>
                </Skeleton>
            </Card>
            <Card
                type="inner"
                title="README"
                className="mt-20"
                bodyStyle={{ minHeight: 500, overflow: "hidden" }}
            >
                <Skeleton loading={query.debouncedLoading} active paragraph={{ rows: 12 }}>
                    {readme && <GithubMarkdown text={readme} repoUri={repoUri} />}
                    {!readme && (
                        <Row align="middle" justify="center" style={{ minHeight: 500 }}>
                            <Empty description="No readme" />
                        </Row>
                    )}
                </Skeleton>
            </Card>
        </Card>
    );
};

export const ExternalLinks = (props: npmApi.PackageResponse) => {
    const { links } = props.collected.metadata || {};

    const items = [
        { href: links.repository, icon: <GithubOutlined style={{ fontSize: 28 }} /> },
        { href: links.npm, icon: <Icon component={IconNpm} style={{ fontSize: 40 }} /> },
    ];

    return (
        <Row align="middle" gutter={[20, 20]}>
            {items.map(({ icon, href }) => (
                <Typography.Link
                    key={href}
                    href={href}
                    target="_blank"
                    disabled={!href}
                    style={{ marginLeft: 10 }}
                >
                    {icon}
                </Typography.Link>
            ))}
        </Row>
    );
};

// FIXME: @hardcoded @decompose
type GroupProps = {
    items: Dependency[];
    activeKey?: string;
};

export const DependencyGroup = ({ items, activeKey }: GroupProps) => {
    return (
        <Row gutter={[10, 10]} className="mt-20">
            {items.map((data) => (
                <Col key={data.name} span={8}>
                    {/* FIXME: @hardcoded */}
                    <Link to={`/tech/${encodeURIComponent(data.name)}`}>
                        <DependencyItem data={data} active={activeKey === data.name} />
                    </Link>
                </Col>
            ))}
        </Row>
    );
};
