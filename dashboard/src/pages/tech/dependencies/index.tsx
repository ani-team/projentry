import { Typography, Layout } from "antd";
import { RouteChildrenProps } from "react-router-dom";

import { Header } from "features";
import { DependencyCard, DependencyGroup } from "entities/dependency";
import { NavBreadcrumb } from "entities/navigation";
import { dom } from "shared/lib";
import { packageJson } from "shared/api";
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

    const packageDeps = packageJson.getDependencies();
    const packageDevDeps = packageJson.getDevDependencies();

    const current = dependencyName ? packageJson.getDependency(dependencyName) : undefined;

    return (
        <Split header={<Header />}>
            <Split.Main>
                <NavBreadcrumb />
                <Typography.Title className="mt-40" level={2}>
                    Tech Stack
                </Typography.Title>
                <Layout className="mt-40">
                    <DependencyGroup title="Dependencies" items={packageDeps} />
                    <DependencyGroup title="Dev Dependencies" items={packageDevDeps} />
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
