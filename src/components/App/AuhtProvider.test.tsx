import React from 'react';
import {render} from "@testing-library/react";
import AuthContext, {AuthProvider} from "./AuthProvider";
import {act} from "react-dom/test-utils";

describe('AuthContext', () => {

    it('test correct login', () => {
        let isLoggedIn;
        let login: Function;

        render(
            <AuthProvider>
                <AuthContext.Consumer>
                    {(value) => {
                        isLoggedIn = value.isLoggedIn;
                        login = value.login;
                        return null;
                    }}
                </AuthContext.Consumer>
            </AuthProvider>
        );

        expect(isLoggedIn).toBe(false);
        act(() => login("email@email.com", "password"));
        expect(isLoggedIn).toBe(true);
    });

    it('correct logout', () => {
        let isLoggedIn;
        let logout: Function;
        let navigateState = {currentPage: "login"};
        let navigateFunc = (page: string) => {
            navigateState.currentPage = page
        };

        render(
            <AuthProvider>
                <AuthContext.Consumer>
                    {(value) => {
                        isLoggedIn = value.isLoggedIn; //если ставить true, он всегда будет в true
                        logout = value.logout;
                        return null;
                    }}
                </AuthContext.Consumer>
            </AuthProvider>
        );

        act(() => logout());
        expect(isLoggedIn).toBe(false);
        expect(navigateState.currentPage).toBe("login");
    });

});
