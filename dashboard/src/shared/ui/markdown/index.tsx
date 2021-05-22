import ReactMarkdown, { ReactMarkdownPropsBase } from "react-markdown";
import gfm from "remark-gfm";
import CodeRenderer from "./code-renderer";
import { useLocalUri, GITHUB_DOMAIN } from "./use-local-uri";

type Props = ReactMarkdownPropsBase & {
    text: string;
    className?: string;
};

export const Markdown = ({ text, className, ...mdProps }: Props) => (
    <ReactMarkdown
        className={className}
        allowDangerousHtml
        renderers={{ code: CodeRenderer }}
        /**
         * Github Flavored Markdown
         * @see https://github.com/remarkjs/react-markdown#use
         */
        plugins={[gfm]}
        {...mdProps}
    >
        {text}
    </ReactMarkdown>
);

type GithubProps = Props & {
    /**
     * Ссылка на github-репозиторий
     * @see https://github.com/{org}/{name},
     */
    repoUrl?: string;
    branch?: string;
};

export const GithubMarkdown = ({ repoUrl, branch = "master", ...mdProps }: GithubProps) => {
    const repoUri = repoUrl?.replace(GITHUB_DOMAIN, "").slice(1);
    const uriTransformers = useLocalUri({ repoUri, branch });

    return <Markdown {...mdProps} {...uriTransformers} />;
};
