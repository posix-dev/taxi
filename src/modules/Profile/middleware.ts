import {getProfileCardRequest, profileSubmitRequest, sendCardFailure, sendCardSuccess} from "./actions";
import {sendCard, getCard} from '../../api'

export const profileMiddleware = (store: any) => (next: any) => async (action: any) => {
    if (action.type === profileSubmitRequest.toString()) {
        const {name, date, card, cvv, token} = action.payload;
        const {success, error} = await sendCard(name, date, card, cvv, token);
        if (success) {
            store.dispatch(sendCardSuccess())
        } else {
            store.dispatch(sendCardFailure(error))
        }
    }
    if (action.type === getProfileCardRequest.toString()) {

    } else {
        next(action);
    }
};