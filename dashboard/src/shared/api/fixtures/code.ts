/* eslint-disable max-len */

export const reactJsx = `

#### Фильтры для списка задач

\`\`\`tsx
// features/tasks-filters/ui.tsx
import { taskModel } from "entities/task";
import { Button } from "shared/ui/button";
import { Row } from "shared/ui/row";
// Либо можно сразу обращаться к shared/ui
// Если не так критичен размер бандла
// import { Row, Button } from "shared/ui";

type Filter = {
    id: number;
    title: string;
}

// Описываем здесь датасет фильтров "Закрытые" / "Открытые" и т.п.
const filters: Filter[] = [...];

export const TasksFilters = () => {
    const { activeFilters } = taskModel.selectors.useFilters();
    return (
        <Row display="flex">
            {filters.map(({ title, id }) => (
                <Button 
                    key={id} 
                    onClick={() => taskModel.events.toggleFilter(id)}
                    toggled={activeFilters.includes(id)}
                >
                    {title}
                </Button>
            ))}
        </Row>
    )
}
\`\`\`
`;

export const authSnippet = `...
// FIXME: @lowCoupling
import Origin from "features/origin";
...

export const useAuth = () => {
    ...
    // FIXME: @dry with XXX
    const isAuth = !!viewer;

    // FIXME: @dangerAccess
    const login = (credential: UserCredential) => {
        ...
    };
    // FIXME: @dangerAccess
    const logout = () => {
        ...
    };
};`;

export const authSnippetMd = `
\`\`\`tsx
${authSnippet}
\`\`\`
`;

export const styleSnippet = `.origin {
    // pos
    position: fixed;
    right: 20px;
    bottom: 20px;
    // stylesheets
    // @dry Auth.page
    color: var(--clr-gray--400);
    cursor: pointer;
`;

export const styleSnippetMd = `
\`\`\`scss
${styleSnippet}
\`\`\`
`;

export const taskDetailsSnippet = `import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// FIXME: @lowCoupling
import { ToggleTask } from "pages/tasks-list/toggle-task";
import { TaskCard, taskModel } from "entities/task";
import { Layout } from "shared/ui/layout";
import { Error } from "shared/ui/error";

type Props = RouteChildrenProps<{ ... }>;

export const TaskDetailsPage = (props: Props) => {
    // FIXME: @hardcoded
    const taskId = Number(props.match?.params.taskId);
    // FIXME: @hardcoded
    const task = useSelector((store) => store.entities.tasks[taskId]);

    // FIXME: @dry
    if (!task) {
        return <Error type="404" message="Задача не найдена">
    }

    return (
        <Layout>
            <Layout.Toolbar>
                <Link to="/">К списку задач</Link>
            </Layout.Toolbar>
            <Layout.Content>
                <TaskCard data={task} size="large">
                    <ToggleTask taskId={task.id} />
                </TaskCard>
            </Layout.Content>
        </Layout>
    )
}`;
