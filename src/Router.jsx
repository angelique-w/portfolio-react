import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import AdminPage from "./AdminPage/AdminPage";
import MainPage from "./MainPage/MainPage";

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={MainPage} />
                <Route path="/admin" component={AdminPage} />
            </Switch>
        </BrowserRouter>
    );
}

export default Router;
