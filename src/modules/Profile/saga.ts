import {profileSubmitRequest, sendCardFailure, sendCardSuccess} from "./actions";
import {sendCard} from '../../api'
import {call, fork, put, takeLatest} from "redux-saga/effects";

function* profileWatcher() {
    yield takeLatest(profileSubmitRequest, profileSubmitFlow);
}

export function* profileSubmitFlow(action: any) {
    const {name, date, card, cvv, token} = action.payload;
    const {success, error} = yield call(sendCard, name, date, card, cvv, token);

    if (success) {
        yield put(sendCardSuccess());
    } else {
        yield put(sendCardFailure(error));
    }
}

export default function* () {
    yield fork(profileWatcher);
}