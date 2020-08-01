import {combineReducers} from "redux";
import {handleActions} from "redux-actions";
import {getAddressListFailure, getAddressListRequest, getAddressListSuccess} from "./actions";

const addressList = handleActions(
    {
        [getAddressListSuccess.toString()]: (_state, action) => action.payload
    },
    []
);

const isLoading = handleActions(
    {
        [getAddressListRequest.toString()]: () => true,
        [getAddressListSuccess.toString()]: () => false,
        [getAddressListFailure.toString()]: () => false
    },
    false
);

const addressError = handleActions(
    {
        [getAddressListRequest.toString()]: () => "",
        [getAddressListSuccess.toString()]: () => "",
        [getAddressListFailure.toString()]: () => "Не получилось достать адреса"
    },
    ""
);
//
// const token = handleActions(
//     {
//         [authSuccess.toString()]: (_state, action) => action.payload,
//         [logOut.toString()]: () => ""
//     },
//     ""
// );

export default combineReducers({addressList, isLoading, addressError});