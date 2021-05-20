import { lazy } from "react";
import { Route, Switch, Redirect, useRouteMatch } from "react-router-dom";

const IndexPage = lazy(() => import("./index/index"));
const IssuesPage = lazy(() => import("./issues"));

const Routing = () => {
    const match = useRouteMatch();

    return (
        <Switch>
            <Route exact path={match.path} component={IndexPage} />
            <Route exact path={`${match.path}/issues`} component={IssuesPage} />
            <Route exact path={`${match.path}/issues/:issueTag`} component={IssuesPage} />
            <Redirect to={match.path} />
        </Switch>
    );
};

export default Routing;
