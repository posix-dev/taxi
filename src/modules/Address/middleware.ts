import {getAddressList} from '../../api'
import {getAddressListFailure, getAddressListRequest, getAddressListSuccess} from "./actions";

export const addressMiddleware = (store: any) => (next: any) => async (action: any) => {
    if (action.type === getAddressListRequest.toString()) {
        const {addresses} = await getAddressList();
        if (addresses) {
            store.dispatch(getAddressListSuccess(addresses));
        } else {
            store.dispatch(getAddressListFailure())
        }
    } else {
        next(action);
    }
};