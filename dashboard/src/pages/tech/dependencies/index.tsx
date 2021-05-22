import { Typography, Layout, Row, Col } from "antd";
import { RouteChildrenProps, Link } from "react-router-dom";

import { Header } from "features";
import { DependencyCard, DependencyItem } from "entities/dependency";
import { NavBreadcrumb } from "entities/navigation";
import { dom } from "shared/lib";
import { getPackageJson } from "shared/api";
import { Split } from "shared/ui";

type Props = RouteChildrenProps<{
    dependencyName?: string;
}>;

/**
 * @page Страница тех.стека - Зависимости
 */
const TechDepedenciesPage = (props: Props) => {
    const { params } = props?.match || {};
    const dependencyName = params?.dependencyName
        ? decodeURIComponent(params?.dependencyName)
        : undefined;

    dom.useProjectTitle("Issues");

    const dependencyJson = getPackageJson();
    const dependencyMap = dependencyJson.dependencies || {};
    const dependencyList = Object.entries(dependencyMap);

    const current = dependencyName
        ? {
              name: dependencyName,
              version: dependencyMap[dependencyName],
          }
        : undefined;

    return (
        <Split header={<Header />}>
            <Split.Main>
                <NavBreadcrumb />
                <Typography.Title className="mt-40" level={2}>
                    Tech Stack
                </Typography.Title>
                <Layout className="mt-40">
                    <Row gutter={[10, 10]}>
                        {dependencyList.map(([name, version]) => (
                            <Col key={name} span={8}>
                                <Link to={`/tech/${encodeURIComponent(name)}`}>
                                    <DependencyItem data={{ name, version }} />
                                </Link>
                            </Col>
                        ))}
                    </Row>
                </Layout>
            </Split.Main>
            <Split.Sider>
                {current && <DependencyCard data={current} />}
                {!current && <Split.Placeholder />}
            </Split.Sider>
        </Split>
    );
};

export default TechDepedenciesPage;
