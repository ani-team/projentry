import path from "path";
import { Markdown } from "shared/ui";
import { getDoc } from "shared/api";

type PreviewProps = {
    pathname: string;
    content: string;
    extension: string;
};

export const Preview = ({ pathname, content, extension }: PreviewProps) => (
    <div>
        <h2>{pathname}</h2>
        <Markdown text={`\`\`\`${extension}\n${content}\n\`\`\``} />
    </div>
);

type LazyPreviewProps = {
    pathname: string;
};

export const LazyPreview = ({ pathname }: LazyPreviewProps) => {
    // FIXME: load later by selectors?
    const content = getDoc(pathname);
    const extension = path.extname(pathname).slice(1);
    return <Preview pathname={pathname} content={content} extension={extension} />;
};
