import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import Profile from "../Profile";
import PageNotFound from "../PageNotFound";
import Login from "../Login/Login";
import Map from "../Map/Map";
import Registration from "../Registration";
import {PrivateRoute} from "../PrivateRoute/PrivateRoute";

export default (Router: any) => {
    return (
        <Switch>
            <Route path="/login" component={Login}/>
            <PrivateRoute path="/profile" component={Profile}/>
            <PrivateRoute path="/map" component={Map}/>
            <Route path="/registration" component={Registration}/>
            <Redirect exact from="/" to="/login"/>
            <Route path="*" component={PageNotFound}/>
        </Switch>
    );
};