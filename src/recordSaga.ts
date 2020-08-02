import {runSaga} from "redux-saga";

export const recordSaga = async (saga: any, initialAction: any = null) => {
    const dispatched: Array<any> = [];

    await runSaga(
        {
            dispatch: (action) => dispatched.push(action),
        },
        saga,
        initialAction
    ).done;

    return dispatched;
};
