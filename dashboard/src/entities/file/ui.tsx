import { Markdown } from "shared/ui";
import { getDoc } from "shared/api";

type PreviewProps = {
    title: string;
    content: string;
};

export const Preview = ({ title, content }: PreviewProps) => (
    <div>
        <h2>{title}</h2>
        <Markdown text={content} />
    </div>
);

type LazyPreviewProps = {
    pathname: string;
};

export const LazyPreview = ({ pathname }: LazyPreviewProps) => {
    const content = getDoc(pathname);
    return <Preview title={pathname} content={content} />;
};
