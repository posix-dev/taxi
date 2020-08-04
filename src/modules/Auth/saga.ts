import {authFailure, authRequest, authSuccess, registrationRequest} from "./actions";
import {serverLogIn, serverRegistration} from '../../api'
import {takeLatest, put, call, fork} from "redux-saga/effects";

function* authWatcher() {
    yield takeLatest(authRequest, fetchLogin);
    yield takeLatest(registrationRequest, fetchRegister);
}

export function* fetchLogin(action: any) {
    const {login, password} = action.payload;
    const {success, error, token} = yield call(serverLogIn, login, password);

    if (success) {
        yield put(authSuccess(token));
    } else {
        yield put(authFailure(error));
    }
}

export function* fetchRegister(action: any) {
    const {email, password, name, surname} = action.payload;
    const {success, error, token} = yield call(serverRegistration, email, password, name, surname);

    if (success) {
        yield put(authSuccess(token));
    } else {
        yield put(authFailure(error));
    }
}

export default function* () {
    yield fork(authWatcher);
}