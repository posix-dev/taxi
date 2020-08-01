import {combineReducers} from "redux";
import {handleActions} from "redux-actions";
import {authRequest, authSuccess, authFailure, logOut} from "./actions";

const isAuthorized = handleActions(
    {
        [authSuccess.toString()]: () => true,
        [logOut.toString()]: () => false
    },
    false
);

const isLoading = handleActions(
    {
        [authRequest.toString()]: () => true,
        [authSuccess.toString()]: () => false,
        [authFailure.toString()]: () => false
    },
    false
);

const authError = handleActions(
    {
        [authRequest.toString()]: () => "",
        [authFailure.toString()]: (_state, action) => action.payload,
        [authSuccess.toString()]: () => ""
    },
    ""
);

const token = handleActions(
    {
        [authSuccess.toString()]: (_state, action) => action.payload,
        [logOut.toString()]: () => ""
    },
    ""
);

export default combineReducers({isAuthorized, isLoading, authError, token});