import path from "path";
import { Markdown } from "shared/ui";
import { getFile } from "shared/api";
import styles from "./styles.module.scss";

type PreviewProps = {
    pathname: string;
    content: string;
};

export const Preview = ({ pathname, content }: PreviewProps) => {
    const extension = path.extname(pathname).slice(1);

    if (!content) return null;

    return (
        <div className={styles.root}>
            <Markdown
                className={styles.rootPathname}
                text={`\`\`\`${extension}\n${pathname}\n\`\`\``}
            />
            <Markdown
                className={styles.rootContent}
                text={`\`\`\`${extension}\n${content}\n\`\`\``}
            />
        </div>
    );
};

type LazyPreviewProps = {
    pathname: string;
};

export const LazyPreview = ({ pathname }: LazyPreviewProps) => {
    // FIXME: load later by selectors?
    const content = getFile(pathname);
    return <Preview pathname={pathname} content={content} />;
};
