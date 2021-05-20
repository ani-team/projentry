import path from "path";
import { Markdown } from "shared/ui";
import { getDoc } from "shared/api";

type PreviewProps = {
    pathname: string;
    content: string;
};

export const Preview = ({ pathname, content }: PreviewProps) => {
    const extension = path.extname(pathname).slice(1);

    if (!content) return null;

    return (
        <div>
            <h2>{pathname}</h2>
            <Markdown text={`\`\`\`${extension}\n${content}\n\`\`\``} />
        </div>
    );
};

type LazyPreviewProps = {
    pathname: string;
};

export const LazyPreview = ({ pathname }: LazyPreviewProps) => {
    // FIXME: load later by selectors?
    const content = getDoc(pathname);
    return <Preview pathname={pathname} content={content} />;
};
