import { lazy } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { useResetScrollAtEveryPage } from "./hooks";

const BoardPage = lazy(() => import("./board"));

const Routing = () => {
    useResetScrollAtEveryPage();

    return (
        <Switch>
            <Route exact path="/" component={BoardPage} />
            <Redirect to="/" />
        </Switch>
    );
};

export default Routing;
