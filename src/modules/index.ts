import {combineReducers} from "redux";
import { fork } from "redux-saga/effects";
import auth from "./Auth";
import profile from "./Profile";
import order from "./Order";
import address from "./Address";
import authSaga from "./Auth/saga";
import profileSaga from "./Profile/saga";
import addressSaga from "./Address/saga";
import orderSaga from "./Order/saga";

export default combineReducers({auth, profile, order, address});

export function* rootSaga() {
    yield fork(authSaga);
    yield fork(profileSaga);
    yield fork(addressSaga);
    yield fork(orderSaga);
}