/* eslint-disable max-len */

export const requirements = `# Requirements

## Main

- Node.js (12+)
- Git

## DevExp

### VSCode

Plugins list for better <b title="Developer Experience">DX</b>
> There is a required base config for all of these

- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) - Autocomplete for Tailwind classes in components
- [Apollo GraphQL](https://marketplace.visualstudio.com/items?itemName=apollographql.vscode-apollo) - IntelliSense with autocomplete (but with freezes, possible)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) + [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) - Autofix on save, testing from linters
`;

export const devguide = `## Usage

### Launch dev-stand
\`\`\`sh
$ npm i                   # install dependencies
$ npm run start           # launch stand
\`\`\`

### Launch tests
\`\`\`sh
$ npm run test            # launch all tests
\`\`\`

\`\`\`sh
$ npm run react:test      # unit tests
$ npm run lint:test       # linters tests
$ npm run lint:fix        # linters tests + autofix
\`\`\`

### Work with dependencies
\`\`\`sh
$ npm run deps:clean      # removing redundant created files, node_modules
$ npm run deps:reinstall  # reinstall dependencies
\`\`\`

### API Codegen
\`\`\`sh
$ npm run api:gen         # generate types and hooks for work with API - once
$ npm run api:gen--watch  # generate types and hooks for work with API - watch-mode
\`\`\`

## VSCode

Plugins list for better <b title="Developer Experience">DX</b>
> There is a required base config for all of these

- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) - Autocomplete for Tailwind classes in components
- [Apollo GraphQL](https://marketplace.visualstudio.com/items?itemName=apollographql.vscode-apollo) - IntelliSense with autocomplete (but with freezes, possible)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) + [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) - Autofix on save, testing from linters
`;

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

export const packageJson = `{
    "name": "prj-front",
    "version": "0.1.0",
    "private": true,
    "dependencies": {
      "@ant-design/icons": "^4.6.2",
      "@testing-library/jest-dom": "^5.11.10",
      "@testing-library/react": "^11.2.6",
      "@testing-library/user-event": "^12.8.3",
      "@types/jest": "^26.0.22",
      "@types/node": "^12.20.10",
      "@types/react": "^17.0.3",
      "@types/react-dom": "^17.0.3",
      "antd": "^4.15.2",
      "classnames": "^2.3.1",
      "compose-function": "^3.0.3",
      "dayjs": "^1.10.4",
      "effector": "^21.8.11",
      "effector-react": "^21.3.2",
      "moment": "^2.29.1",
      "node-sass": "^5.0.0",
      "plural-ru": "^2.0.2",
      "query-string": "^7.0.0",
      "react": "^17.0.2",
      "react-dom": "^17.0.2",
      "react-router": "^5.2.0",
      "react-router-dom": "^5.2.0",
      "react-scripts": "4.0.3",
      "react-yandex-maps": "^4.6.0",
      "typescript": "^4.2.4",
      "use-query-params": "^1.2.2",
      "web-vitals": "^1.1.1"
    },
    "scripts": {
      "start": "react-scripts start",
      "build": "react-scripts build",
      "test": "react-scripts test",
      "eject": "react-scripts eject",
      "lint:test": "eslint ./src",
      "lint:fix": "eslint ./src --fix"
    },
    "eslintConfig": {
      "extends": [
        "react-app",
        "react-app/jest"
      ]
    },
    "browserslist": {
      "production": [
        ">0.2%",
        "not dead",
        "not op_mini all"
      ],
      "development": [
        "last 1 chrome version",
        "last 1 firefox version",
        "last 1 safari version"
      ]
    },
    "devDependencies": {
      "@types/compose-function": "0.0.30",
      "@types/react-router": "^5.1.13",
      "@types/react-router-dom": "^5.1.7",
      "eslint": "^7.24.0",
      "eslint-config-prettier": "^8.2.0",
      "eslint-plugin-prettier": "^3.4.0",
      "eslint-plugin-unicorn": "^30.0.0",
      "prettier": "^2.2.1",
      "stylelint": "^13.12.0",
      "stylelint-config-css-modules": "^2.2.0",
      "stylelint-config-recess-order": "^2.4.0",
      "stylelint-config-recommended": "^4.0.0",
      "stylelint-config-standard": "^21.0.0",
      "stylelint-scss": "^3.19.0"
    }
  }
  `;
