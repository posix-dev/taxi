import { createAction } from "redux-actions";

const AUTH_PACKAGE = "my-app/Auth";

export const authRequest = createAction(`${AUTH_PACKAGE}/FETCH_REQUEST`);
export const registrationRequest = createAction(`${AUTH_PACKAGE}/FETCH_REGISTRATION_REQUEST`);
export const authSuccess = createAction(`${AUTH_PACKAGE}/FETCH_SUCCESS`);
export const authFailure = createAction(`${AUTH_PACKAGE}/FETCH_FAILURE`);
export const logOut = createAction(`${AUTH_PACKAGE}/LOGOUT`);