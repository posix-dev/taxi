import {getAddressListFailure, getAddressListRequest, getAddressListSuccess} from "./actions";
import {getAddressList} from '../../api'
import {call, fork, put, takeLatest} from "redux-saga/effects";

function* addressWatcher() {
    yield takeLatest(getAddressListRequest, fetchGetAddressList);
}

export function* fetchGetAddressList() {
    const {addresses} = yield call(getAddressList);

    if (addresses) {
        yield put(getAddressListSuccess(addresses));
    } else {
        yield put(getAddressListFailure());
    }
}

export default function* () {
    yield fork(addressWatcher);
}