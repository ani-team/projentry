import { Breadcrumb } from "antd";
import { Link, useLocation } from "react-router-dom";
import { PROJECT_NAME } from "shared/config";
import { string } from "shared/lib";

export const NavBreadcrumb = () => {
    const location = useLocation();
    const slugs = location.pathname.split("/");

    const subroutes = slugs.map((_, idx) => ({
        href: slugs.slice(0, idx + 1).join("/"),
        slug: slugs[idx],
    }));

    return (
        <Breadcrumb>
            <Breadcrumb.Item>
                <Link to="/">{PROJECT_NAME}</Link>
            </Breadcrumb.Item>
            {subroutes.slice(1).map((sr) => (
                <Breadcrumb.Item key={sr.href}>
                    <Link to={sr.href}>{decodeURIComponent(string.capitalize(sr.slug))}</Link>
                </Breadcrumb.Item>
            ))}
        </Breadcrumb>
    );
};
