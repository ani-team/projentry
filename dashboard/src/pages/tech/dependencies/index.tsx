import { Typography, Layout, Tabs } from "antd";
import { ApiFilled, ApiOutlined } from "@ant-design/icons";
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
    dom.useProjectTitle("Issues");

    const { params } = props?.match || {};
    const dependencyName = params?.dependencyName
        ? decodeURIComponent(params?.dependencyName)
        : undefined;
    const current = dependencyName ? packageJson.getDependency(dependencyName) : undefined;

    const packageDeps = packageJson.getDependencies();
    const packageDevDeps = packageJson.getDevDependencies();

    return (
        <Split header={<Header />}>
            <Split.Main>
                <NavBreadcrumb />
                <Typography.Title className="mt-40" level={2}>
                    Tech Stack
                </Typography.Title>
                <Layout className="mt-40">
                    <Tabs>
                        {/* prettier-ignore */}
                        <Tabs.TabPane tab={<span><ApiFilled/> Dependencies</span>} key="deps">
                            <DependencyGroup items={packageDeps} activeKey={dependencyName} />
                        </Tabs.TabPane>
                        {/* prettier-ignore */}
                        <Tabs.TabPane tab={<span><ApiOutlined /> Dev Dependencies</span>} key="devDeps">
                            <DependencyGroup items={packageDevDeps} activeKey={dependencyName} />
                        </Tabs.TabPane>
                    </Tabs>
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
