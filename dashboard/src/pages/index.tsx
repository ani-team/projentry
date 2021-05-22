import { lazy } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { useResetScrollAtEveryPage } from "./hooks";

const BoardPage = lazy(() => import("./board"));
const TopicPage = lazy(() => import("./topic"));
const HealthPages = lazy(() => import("./health"));
const TechPages = lazy(() => import("./tech"));
const DocsPages = lazy(() => import("./docs"));

const Routing = () => {
    useResetScrollAtEveryPage();

    return (
        <Switch>
            <Route exact path="/" component={BoardPage} />
            <Route path="/health" component={HealthPages} />
            <Route path="/tech" component={TechPages} />
            <Route path="/docs" component={DocsPages} />
            <Route exact path="/explorer" component={TopicPage} />
            <Redirect to="/" />
        </Switch>
    );
};

export default Routing;
