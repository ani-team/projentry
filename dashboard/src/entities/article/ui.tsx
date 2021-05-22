import { Card } from "antd";
import { Markdown } from "shared/ui";
import { getFile } from "shared/api";
import * as lib from "./lib";

type Props = {
    pathname: string;
};
export const ArticlePreview = ({ pathname }: Props) => {
    const content = getFile(pathname);

    return (
        <Card
            type="inner"
            title={pathname}
            className="mt-20"
            bodyStyle={{ minHeight: 500, overflow: "hidden" }}
        >
            <Markdown text={lib.getBody(content)} />
        </Card>
    );
};
