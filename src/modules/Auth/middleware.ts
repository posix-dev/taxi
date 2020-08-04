import {authFailure, authRequest, authSuccess, registrationRequest} from "./actions";
import {serverLogIn, serverRegistration} from '../../api'

export const authMiddleware = (store: any) => (next: any) => async (action: any) => {
    if (action.type === authRequest.toString()) {
        const {email, password} = action.payload;
        const {success, error, token} = await serverLogIn(email, password);
        if (success) {
            store.dispatch(authSuccess(token));
        } else {
            store.dispatch(authFailure(error));
        }
    } else if (action.type === registrationRequest.toString()) {
        const {email, password, name, surname} = action.payload;
        const {success, error, token} = await serverRegistration(email, password, name, surname);
        if (success) {
            store.dispatch(authSuccess(token));
        } else {
            store.dispatch(authFailure(error));
        }
    } else {
        next(action);
    }
};