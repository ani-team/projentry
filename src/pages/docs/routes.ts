import { GET_STARTED, CONVENTIONS, FAQ } from "entities/topic";

// FIXME: @dry
// FIXME: use at routingSwitcher
export const routes = [
    {
        ...GET_STARTED,
        href: "/docs/get-started",
        disabled: false,
    },
    {
        ...CONVENTIONS,
        href: "/docs/conventions",
        disabled: false,
    },
    {
        ...FAQ,
        href: "/docs/faq",
        disabled: false,
    },
];
