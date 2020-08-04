import {getRouteFailure, getRouteRequest, getRouteSuccess} from "./actions";
import {getRoute} from '../../api'
import {call, fork, put, takeLatest} from "redux-saga/effects";

function* orderWatcher() {
    yield takeLatest(getRouteRequest, fetchGetRoute);
}

export function* fetchGetRoute(action: any) {
    const {from, to} = action.payload;
    const array = yield call(getRoute, from, to);

    if (array) {
        yield put(getRouteSuccess(array));
    } else {
        yield put(getRouteFailure());
    }
}

export default function* () {
    yield fork(orderWatcher);
}