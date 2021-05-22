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

export const pagesConventions = `# Pages

> \`WIP:\` На данный момент ведутся активные обсуждения касаемо этого слоя:
>
> - является ли страница тем же слайсом
> - может ли быть иерархия страниц фрактальной, чтобы повторять структуру роутов
> - и т.д.
>
> Поэтому здесь приведены общие сведения по этому слою

**Страницы приложения**

\`\`\`sh
└── pages/{slice}
          ├── index.ts
          ├── lib.ts
          ├── model.ts
          └── ui.tsx
\`\`\`

1. Здесь располагаются страницы приложения
    - соответствующие конкретному роуту
    - при необходимости - сгруппированные общей папкой / родительской страницей

1. Каждая страница должна иметь **максимально простую логику**
    - вся логика отображения, бизнес правил и прочего - должна реализовываться путем композиции нижележащих слоев (\`shared\`, \`entitites\`, \`features\`)
    - при этом взаимодействие между нижележащими слоями - также должно осуществляться чаще всего на странице
        - *Т.е. если \`featureA\` влияет на \`featureB\` на определенной странице - эта логика должна быть прописана в модели самой странице и только на ней!*
        - *Без кода в самих фичах и тем более, кросс-импортов!*

### Примеры

#### Страница оформления заказа

*Реализация БЛ заказа очень зависит от вашего проекта, где-то порой это может регулироваться и процессами. Поэтому здесь приведена лишь одна из имплементаций*

\`\`\`tsx title=pages/**/index.tsx
import { Order } from "features/order";
import { ProductCard } from "entities/product";
import { orderModel } from "entities/order";
import { Layout } from "shared/ui/layout"

export const CartPage = () => {
    const order = orderModel.useOrder();
    
    // Очень условная разметка
    return (
        {/** Используем shared (Layout) */}
        <Layout>
            <Layout.Main>
                ...
                {/** Используем entities (order.items, ProductCard) */}
                {order.items.map((item) => (
                    <ProductCard key={item.id} data={item} />
                ))}
            </Layout.Main>
            <Layout.Sidebar>
                ...
                {/** Используем features (Order.TotalInfo) */}
                <Order.TotalInfo />
            </Layout.Sidebar>
        </Layout>
    )
}
\`\`\`
`;

export const featuresConventions = `# Features

**Части функциональности приложения**

\`\`\`sh
└── features/{slice}
          ├── lib/
          ├── model/
          ├── ui/
          └── index.ts
\`\`\`

Каждая фича - часть бизнес-логики, при этом обязательно имеющая смысл и ценность для конечного пользователя

- *\`ProductList\`, \`OfficeMap\` - вряд ли можно назвать фичами*
- *\`WalletAddFunds\`, \`AddToCart\` - уже больше смысла для конечного пользователя*

При этом:

- для построения логики используются нижележащие слои
  - *\`shared\`, \`entities\`*
- одна фича **не может** импортировать другую
  - *Если [возникла такая необходимость][refs-low-coupling] - зависимость нужно переносить на слой выше / ниже, либо решать через композицию через children-props*
- фичи не могут быть вложенными, но при этом могут объединяться общей папкой, т.е. структурно
  - *При этом нельзя создавать промежуточные файлы, нужные именно для конкретной группы фич*
  - *Можно использовать только файлы реэкспорты*

### Примеры

#### Авторизация по телефону

\`\`\`tsx title=features/auth/by-phone/ui.tsx
import { viewerModel } from "entities/viewer";

export const AuthByPhone = () => {
    return (
        // для redux - дополнительно нужен dispatch
        <Form onSuccess={(user) => viewerModel.setUser(user)}>
            <Form.Input 
                type="phone"
                ...
            />
            <Form.Button
                ...
            />
        </Form>
    )
}
\`\`\`
`;

export const codeStyle = `# CodeStyle

> Please, don't ignore theese recommendations

## Commits
- Use [semantic commits](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716)
   > commits:
   > - \`feature(scope): details\`
   > - \`fix(scope): details\`
   > - \`refactor(scope): details\`
   > - and etc..
   
- Use [gitflow](https://datasift.github.io/gitflow/IntroducingGitFlow.html)
   > branches:
   > - \`feature/{name}\` => \`dev\`
   > - \`bugfix/{name}\` => \`dev\`
   > - and etc..

## Code
- Don't be blinded by \`DRY\` principle
   > TODO: add comments
- Add comments - only if it's required
- Describe props/types
\`\`\`ts
type TreeItem = {
    /** Unique identifier */
    id: TreeNodeId;
    /** Name */
    name: string;
    /** Amount of related items */
    count: number;
    /** Parent identifier */
    parentId?: TreeNodeId;
}
\`\`\`
- Use \`tsdoc\`-like style
\`\`\`ts
/**
 * Tooltip
 * @remark If you should not specify \`title\` props - tooltip'll be invisible
 */
const Tooltip = (props: Props) => {
\`\`\`

## Styles
- Use \`css\` vars
  - specially - with work with colors
  - not only on app level, also at component's level

\`\`\`css
.app {
    --clr-base: #4d97fd;
    --clr-base-hover: #4d97fd1f;
    ...
}
\`\`\`
`;

export const standsDoc = `# Stands

- Dev stand - http://dev.github-client.gq/
- Prod stand - https://github-client.gq/
- PR stand - [generates during PR pipeline]
`;

export const codegenSettings = `# Codegen Settings

- https://graphql-code-generator.com/docs/getting-started/codegen-config
- https://graphql-code-generator.com/docs/plugins/typescript
- https://graphql-code-generator.com/docs/plugins/typescript-operations
- https://graphql-code-generator.com/docs/plugins/typescript-react-apollo
`;
