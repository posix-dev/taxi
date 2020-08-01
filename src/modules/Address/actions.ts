import { createAction } from "redux-actions";

const ADDRESS_PACKAGE = "my-app/Address";

export const getAddressListRequest = createAction(`${ADDRESS_PACKAGE}/FETCH_GET_ADDRESS_LIST_REQUEST`);
export const getAddressListSuccess = createAction(`${ADDRESS_PACKAGE}/FETCH_GET_ROUTE_SUCCESS`);
export const getAddressListFailure = createAction(`${ADDRESS_PACKAGE}/FETCH_GET_ROUTE_FAILURE`);
// export const registrationRequest = createAction(`${AUTH_PACKAGE}/FETCH_REGISTRATION_REQUEST`);
// export const authSuccess = createAction(`${AUTH_PACKAGE}/FETCH_SUCCESS`);
// export const authFailure = createAction(`${AUTH_PACKAGE}/FETCH_FAILURE`);
// export const logOut = createAction(`${AUTH_PACKAGE}/LOGOUT`);