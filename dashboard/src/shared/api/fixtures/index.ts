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

export const authSnippet = `
\`\`\`tsx
...
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
};
\`\`\`
`;

export const styleSnippet = `
\`\`\`scss
.origin {
    // pos
    position: fixed;
    right: 20px;
    bottom: 20px;
    // stylesheets
    // @dry Auth.page
    color: var(--clr-gray--400);
    cursor: pointer;
\`\`\`
`;
