import { lazy } from "react";
import { Route, Switch, Redirect, useRouteMatch } from "react-router-dom";

const IndexPage = lazy(() => import("./index/index"));
const SectionPage = lazy(() => import("./section"));

const Routing = () => {
    const match = useRouteMatch();

    return (
        <Switch>
            <Route exact path={`${match.path}`} component={IndexPage} />
            <Route exact path={`${match.path}/get-started`} component={SectionPage} />
            <Route exact path={`${match.path}/faq`} component={SectionPage} />
            <Route exact path={`${match.path}/conventions`} component={SectionPage} />
            <Redirect to={`${match.path}`} />
        </Switch>
    );
};

export default Routing;
