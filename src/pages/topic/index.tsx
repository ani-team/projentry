import { Typography, Layout } from "antd";
import { useLocation } from "react-router-dom";

import { Header } from "features";
import * as topics from "entities/topic";
import { NavBreadcrumb } from "entities/navigation";
import { dom, string } from "shared/lib";
import { Split } from "shared/ui";

/**
 * @page Страница заглушка для топика
 */
// eslint-disable-next-line max-lines-per-function
const TopicPage = () => {
    const location = useLocation();
    const slug = location.pathname.slice(1);
    const topicName = string.unslugize(slug);

    dom.useProjectTitle(topicName);

    const topic = topics.findByTitleSlug(slug);

    return (
        <Split header={<Header />}>
            <Split.Main>
                <NavBreadcrumb />
                <Typography.Title className="mt-40" level={2}>
                    {topicName}
                </Typography.Title>
                <Layout className="mt-40">{topic?.description}</Layout>
            </Split.Main>
            <Split.Sider>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ratione itaque
                    placeat laborum perspiciatis repudiandae corporis dolores, repellat sapiente
                    labore repellendus animi id, beatae eligendi aspernatur illum dignissimos,
                    eveniet adipisci! Incidunt modi at impedit. Perspiciatis quam deleniti harum
                    debitis illo, ipsa cupiditate quos quaerat, voluptate nostrum qui quis
                    laboriosam aperiam rerum magnam pariatur quisquam accusantium, minus placeat
                    inventore eos.
                </p>

                <p>
                    Nemo mollitia rem officia culpa quasi, debitis ullam qui optio quis, dolorum
                    dicta iure? Quia dicta, quam necessitatibus quas quae quisquam ullam a sed
                    labore veritatis facilis dignissimos architecto porro beatae aut fugit adipisci,
                    voluptas voluptatum id ab possimus deserunt molestias. Ipsa voluptatibus magnam
                    sunt fugiat eos, soluta exercitationem ducimus a iure nesciunt sit, iste odit
                    quidem dolorem voluptates consequuntur, blanditiis ipsam eius.
                </p>

                <p>
                    Ex vel repellat nisi unde tempora culpa eius porro, aliquam expedita laborum
                    magni ipsam facilis tenetur cupiditate officia eos molestias beatae perspiciatis
                    enim incidunt consequatur. Exercitationem in, nihil corporis deleniti ducimus
                    dicta placeat at ipsam maiores quod, atque voluptatibus doloremque vero animi
                    fugit sit quas. Officiis quidem voluptate vitae maxime voluptatibus tempora,
                    fugiat natus dolore vel. Aliquam laborum nihil itaque delectus eaque quia harum
                    perferendis placeat nobis, amet saepe suscipit, alias commodi minus. Quisquam,
                    et eum! Iste, repudiandae!
                </p>
            </Split.Sider>
        </Split>
    );
};

export default TopicPage;
