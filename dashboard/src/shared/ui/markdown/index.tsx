import ReactMarkdown, { ReactMarkdownPropsBase } from "react-markdown";
import gfm from "remark-gfm";
import CodeRenderer from "./code-renderer";
import { useLocalUri } from "./use-local-uri";

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
    repoUri?: string;
    branch?: string;
};

export const GithubMarkdown = ({ repoUri, branch = "master", ...mdProps }: GithubProps) => {
    const uriTransformers = useLocalUri({ repoUri, branch });

    return <Markdown {...mdProps} {...uriTransformers} />;
};
