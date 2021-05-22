import { Card } from "antd";
import { FileFilled } from "@ant-design/icons";

import { Markdown, RowCard } from "shared/ui";
import { getFile } from "shared/api";
import * as lib from "./lib";
import styles from "./styles.module.scss";

type BaseProps = {
    pathname: string;
};
export const ArticlePreview = ({ pathname }: BaseProps) => {
    const content = getFile(pathname);

    return (
        <Card
            type="inner"
            title={pathname}
            className="mt-20"
            bodyStyle={{ minHeight: 500, overflow: "hidden" }}
        >
            <Markdown text={lib.getContent(content)} />
        </Card>
    );
};

type Props = BaseProps & {
    active?: boolean;
    href?: string;
};

export const ArticleRow = ({ pathname, active, href }: Props) => {
    const content = getFile(pathname);
    const attrs = lib.getAttrs(content);

    return (
        <RowCard
            Icon={FileFilled as any}
            title={lib.getTitle(pathname)}
            subtitle={
                attrs.description ? (
                    attrs.description
                ) : (
                    <pre className={styles.extPreview}>
                        <Markdown text={lib.getBody(content)} />
                    </pre>
                )
            }
            href={href}
            active={active}
        />
    );
};
