import { lazy } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { useResetScrollAtEveryPage } from "./hooks";

const BoardPage = lazy(() => import("./board"));
const TopicPage = lazy(() => import("./topic"));
const HealthPages = lazy(() => import("./health"));
const TechPages = lazy(() => import("./tech"));

const Routing = () => {
    useResetScrollAtEveryPage();

    return (
        <Switch>
            <Route exact path="/" component={BoardPage} />
            {/* FIXME: temp solution! */}
            <Route exact path="/get-started" component={TopicPage} />
            <Route path="/health" component={HealthPages} />
            <Route path="/tech" component={TechPages} />
            <Route exact path="/faq" component={TopicPage} />
            <Route exact path="/conventions" component={TopicPage} />
            <Route exact path="/tech" component={TopicPage} />
            <Route exact path="/explorer" component={TopicPage} />
            <Redirect to="/" />
        </Switch>
    );
};

export default Routing;
