import ReactMarkdown from "react-markdown";
import CodeRenderer from "./code-renderer";

type Props = {
    text: string;
};

export const Markdown = ({ text }: Props) => (
    <ReactMarkdown
        allowDangerousHtml
        renderers={{ code: CodeRenderer }}
        /**
         * Github Flavored Markdown
         * @see https://github.com/remarkjs/react-markdown#use
         */
        // plugins={[gfm]}
        // {...uriTransformers}
    >
        {text}
    </ReactMarkdown>
);
