# Features

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