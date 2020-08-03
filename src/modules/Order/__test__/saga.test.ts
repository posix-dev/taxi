import {fetchGetRoute} from "../saga";
import {recordSaga} from "../../../recordSaga";
import {getRouteRequest, getRouteSuccess, getRouteFailure} from "../actions";
import {getRoute} from "../../../api";

jest.mock("../../../api", () => ({
    getRoute: jest.fn()
        .mockImplementationOnce(() => ([[12.32332, 43.5443543], [44.55555232, 11.423423423]]))
        .mockImplementationOnce(() => {})
}));

describe("order saga", () => {
    describe('#routes', () => {
        it("route list when request is success", async () => {
            const payload = {
                from: "Пулково",
                to: "Больница"
            };
            const array = [[12.32332, 43.5443543], [44.55555232, 11.423423423]];

            const dispatched = await recordSaga(fetchGetRoute, getRouteRequest(payload));
            expect(getRoute).toHaveBeenCalled();
            expect(dispatched).toEqual([getRouteSuccess(array)]);
        });
        it("orderError if route list request is failed", async () => {
            const payload = {
                from: "Пулково",
                to: "Больница"
            };
            const dispatched = await recordSaga(fetchGetRoute, getRouteRequest(payload));
            expect(getRoute).toHaveBeenCalled();
            expect(dispatched).toEqual([getRouteFailure()]);
        });
    });
});