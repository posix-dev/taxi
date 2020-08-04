import React from "react";
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {isAuthorized} from "../../modules/Auth";

export const PrivateRoute = connect((state) => ({
    isAuthorized: isAuthorized(state),
}))(({component: Component, isLoggedIn, ...rest}: any) => (
    <Route
        {...rest}
        render={(props) =>
            isAuthorized ? (
                <Component {...props} />
            ) : (<Redirect to="/"/>)
        }
    />
));