import { createAction } from "redux-actions";

const ORDER_PACKAGE = "my-app/Order";

export const getRouteRequest = createAction(`${ORDER_PACKAGE}/FETCH_GET_ROUTE_REQUEST`);
export const getRouteSuccess = createAction(`${ORDER_PACKAGE}/FETCH_GET_ROUTE_SUCCESS`);
export const getRouteFailure = createAction(`${ORDER_PACKAGE}/FETCH_GET_ROUTE_FAILURE`);
export const clearRoute = createAction(`${ORDER_PACKAGE}/FETCH_CLEAR_ROUTE`);
// export const authSuccess = createAction(`${ORDER_PACKAGE}/FETCH_SUCCESS`);
// export const authFailure = createAction(`${AUTH_PACKAGE}/FETCH_FAILURE`);
// export const logOut = createAction(`${AUTH_PACKAGE}/LOGOUT`);