import { lazy } from "react";
import { Route, Switch, Redirect, useRouteMatch } from "react-router-dom";

const DependenciesPage = lazy(() => import("./dependencies"));

const Routing = () => {
    const match = useRouteMatch();

    return (
        <Switch>
            <Route exact path={`${match.path}`} component={DependenciesPage} />
            <Route exact path={`${match.path}/:dependencyName`} component={DependenciesPage} />
            <Redirect to={`${match.path}`} />
        </Switch>
    );
};

export default Routing;
