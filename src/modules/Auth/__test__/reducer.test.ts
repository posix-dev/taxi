import reducer from "../reducer";
import {authRequest, authSuccess, authFailure, logOut} from "../actions";

const randomAction: any = {
    type: null
};

describe("Auth reducer", () => {
    const state0 = reducer(undefined, randomAction);

    describe("login user", () => {
        it("send login request", () => {
            const state1 = reducer(state0, authRequest());

            expect(state1).toEqual({
                isAuthorized: false,
                isLoading: true,
                authError: "",
                token: ""
            });
        });
        it("login user", () => {
            const token = "fhjG6H4hsj4E";
            const state2 = reducer(state0, authSuccess(token));

            expect(state2).toEqual({
                isAuthorized: true,
                isLoading: false,
                authError: "",
                token
            });
        });
        it("return error if login request is failed", () => {
            const error = "Some error";
            const state3 = reducer(state0, authFailure(error));

            expect(state3).toEqual({
                isAuthorized: false,
                isLoading: false,
                authError: error,
                token: ""
            });
        });
        it("Logout", () => {
            const state4 = reducer(state0, logOut());

            expect(state4).toEqual({
                isAuthorized: false,
                isLoading: false,
                authError: "",
                token: ""
            });
        });
        it("login and logout", () => {
            const token = "fhjG6H4hsj4E";
            const state5 = reducer(state0, authSuccess(token));
            expect(state5).toEqual({
                isAuthorized: true,
                isLoading: false,
                authError: "",
                token
            });
            const state6 = reducer(state5, logOut());

            expect(state6).toEqual({
                isAuthorized: false,
                isLoading: false,
                authError: "",
                token: ""
            });
        });
    });
});