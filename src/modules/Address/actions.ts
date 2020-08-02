import { createAction } from "redux-actions";

const ADDRESS_PACKAGE = "my-app/Address";

export const getAddressListRequest = createAction(`${ADDRESS_PACKAGE}/FETCH_GET_ADDRESS_LIST_REQUEST`);
export const getAddressListSuccess = createAction(`${ADDRESS_PACKAGE}/FETCH_GET_ROUTE_SUCCESS`);
export const getAddressListFailure = createAction(`${ADDRESS_PACKAGE}/FETCH_GET_ROUTE_FAILURE`);