import {handleActions} from "redux-actions";
import {profileSubmitRequest, sendCardFailure, sendCardSuccess} from "./actions";
import {combineReducers} from "redux";

const profileSubmit = handleActions(
    {
        [profileSubmitRequest.toString()]: (_state, action) => action.payload
    },
    {name: "", date: "", card: "", cvv: ""}
);

const isLoading = handleActions(
    {
        [profileSubmitRequest.toString()]: () => true,
        [sendCardSuccess.toString()]: () => false,
        [sendCardFailure.toString()]: () => false
    },
    false
);

const profileError = handleActions(
    {
        [profileSubmitRequest.toString()]: () => "",
        [sendCardSuccess.toString()]: () => "",
        [sendCardFailure.toString()]: (_state, action) => action.payload
    },
    ""
);

const isSubmit = handleActions(
    {
        [profileSubmitRequest.toString()]: () => false,
        [sendCardSuccess.toString()]: () => true,
        [sendCardFailure.toString()]: () => false
    },
    false
);

export default combineReducers({profileSubmit, isLoading, profileError, isSubmit});