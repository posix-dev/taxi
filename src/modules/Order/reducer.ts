import {combineReducers} from "redux";
import {handleActions} from "redux-actions";
import {getRouteRequest, getRouteFailure, getRouteSuccess, clearRoute} from "./actions";

const route = handleActions(
    {
        [getRouteRequest.toString()]: () => [],
        [getRouteSuccess.toString()]: (_state, action) => action.payload,
        [getRouteFailure.toString()]: () => [],
        [clearRoute.toString()]: () => []
    },
    []
);

const isLoading = handleActions(
    {
        [getRouteRequest.toString()]: () => true,
        [getRouteSuccess.toString()]: () => false,
        [getRouteFailure.toString()]: () => false
    },
    false
);

const routeError = handleActions(
    {
        [getRouteRequest.toString()]: () => "",
        [getRouteSuccess.toString()]: () => "",
        [getRouteFailure.toString()]: () => "Не удалось загрузить маршрут"
    },
    ""
);

export default combineReducers({route, isLoading, routeError});