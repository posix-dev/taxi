import reducer from "../reducer";
import {getRouteRequest, getRouteSuccess, getRouteFailure, clearRoute} from "../actions";

const randomAction: any = {
    type: null
};

describe("Order reducer", () => {
    const state0 = reducer(undefined, randomAction);

    describe("route request", () => {
        it("send get route request", () => {
            const state1 = reducer(state0, getRouteRequest());

            expect(state1).toEqual({
                route: [],
                isLoading: true,
                routeError: ""
            });
        });
        it("get route if request is ok", () => {
            const route = [[25.34342, 36.344343], [29.113455, 46.345353]];
            const state2 = reducer(state0, getRouteSuccess(route));

            expect(state2).toEqual({
                route,
                isLoading: false,
                routeError: ""
            });
        });
        it("return error if request isn't ok", () => {
            const error = "Не удалось загрузить маршрут";
            const state3 = reducer(state0, getRouteFailure());

            expect(state3).toEqual({
                route: [],
                isLoading: false,
                routeError: error
            });
        });
    });

    describe("clear route request", () => {
        it("clear route", () => {
            const state4 = reducer(state0, clearRoute());

            expect(state4).toEqual({
                route: [],
                isLoading: false,
                routeError: ""
            });
        });
    });
});