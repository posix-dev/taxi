import reducer from "../reducer";
import {getAddressListRequest, getAddressListSuccess, getAddressListFailure} from "../actions";

const randomAction: any = {
    type: null
};

describe("Address reducer", () => {
    const state0 = reducer(undefined, randomAction);

    describe("address list request", () => {
        it("get address list request", () => {
            const state1 = reducer(state0, getAddressListRequest());

            expect(state1).toEqual({
                addressList: [],
                isLoading: true,
                addressError: ""
            });
        });
        it("get address list is success", () => {
            const addresses = ["Пулково", "Больница"];
            const state2 = reducer(state0, getAddressListSuccess(addresses));

            expect(state2).toEqual({
                addressList: addresses,
                isLoading: false,
                addressError: ""
            });
        });
        it("get address list is success is failed", () => {
            const error = "Не получилось достать адреса";
            const state3 = reducer(state0, getAddressListFailure());

            expect(state3).toEqual({
                addressList: [],
                isLoading: false,
                addressError: error
            });
        });
    });
});