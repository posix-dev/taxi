import {getRouteFailure, getRouteRequest, getRouteSuccess} from "./actions";
import {getRoute} from '../../api'

export const orderMiddleware = (store: any) => (next: any) => async (action: any) => {
    if (action.type === getRouteRequest.toString()) {
        const {from, to} = action.payload;
        const array = await getRoute(from, to);
        if (array) {
            store.dispatch(getRouteSuccess(array));
        } else {
            store.dispatch(getRouteFailure())
        }
    } else {
        next(action);
    }
};