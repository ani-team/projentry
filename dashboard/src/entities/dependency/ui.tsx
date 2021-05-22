import { useState, useEffect } from "react";
import { Card, Empty, Row, Skeleton } from "antd";

import { GithubMarkdown } from "shared/ui";

type Dependency = {
    name: string;
    version: string;
};

type Props = {
    data: Dependency;
};

// FIXME: @hardcoded @manageAccess @shareable
// eslint-disable-next-line max-params
function useRequest<T = any>(resolver: () => Promise<T>, key: string, debounce = 300) {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const debounceLoading = setTimeout(() => {
            setLoading(true);
        }, debounce);

        resolver()
            .then((response) => {
                setData(response);
                clearTimeout(debounceLoading);
                setLoading(false);
            })
            .catch(() => {
                setData(null);
                clearTimeout(debounceLoading);
                setLoading(false);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [key]);

    return { data, loading };
}

export const DependencyItem = ({ data }: Props) => {
    return (
        <Card title={data.name} hoverable>
            {data.version}
        </Card>
    );
};

// FIXME: @tooComplexity
export const DependencyCard = ({ data }: Props) => {
    const dependencyURI = encodeURIComponent(data.name);
    const query = useRequest<DependencyResponse>(
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

type User = {
    name?: string;
    email?: string;
    username?: string;
};

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
// export const DependencyCard = ({ name }: Props) => {
//     const packageNameQuery = useRequest(() => npm.getNpmPage(name));

//     console.log(packageNameQuery);
//     return <div>{name}</div>;
// };
