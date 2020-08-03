import {fetchGetAddressList} from "../saga";
import {recordSaga} from "../../../recordSaga";
import {getAddressListRequest, getAddressListSuccess, getAddressListFailure} from "../actions";
import {getAddressList} from "../../../api";

jest.mock("../../../api", () => ({
    getAddressList: jest.fn()
        .mockImplementationOnce(() => ({success: true, addresses: ["Пулково", "Больница"], error: ""}))
        .mockImplementationOnce(() => ({success: false}))
}));

describe("address saga", () => {
    describe('#address list', () => {
        it("address list request is success", async () => {
            const addresses = ["Пулково", "Больница"];

            const dispatched = await recordSaga(fetchGetAddressList, getAddressListRequest());
            expect(getAddressList).toHaveBeenCalled();
            expect(dispatched).toEqual([getAddressListSuccess(addresses)]);
        });
        it("addressError if address list request is failed", async () => {
            const dispatched = await recordSaga(fetchGetAddressList, getAddressListRequest());
            expect(getAddressList).toHaveBeenCalled();
            expect(dispatched).toEqual([getAddressListFailure()]);
        });
    });
});