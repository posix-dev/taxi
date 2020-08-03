import {fetchProfileSubmit} from "../saga";
import {recordSaga} from "../../../recordSaga";
import {profileSubmitRequest, sendCardSuccess, sendCardFailure} from "../actions";
import {sendCard} from "../../../api";

jest.mock("../../../api", () => ({
    sendCard: jest.fn()
        .mockImplementationOnce(() => ({success: true, error: ""}))
        .mockImplementationOnce(() => ({success: false, error: "Some error"}))
}));

describe("profile saga", () => {
    describe('#submit profile', () => {
        it("submit profile when request is success", async () => {
            const payload = {
                name: "Pavel",
                date: "05/2020",
                card: "4515 0056 2541 8888",
                cvv: "133",
                token: "gfFdX543EEqtfd"
            };

            const dispatched = await recordSaga(fetchProfileSubmit, profileSubmitRequest(payload));
            expect(sendCard).toHaveBeenCalled();
            expect(dispatched).toEqual([sendCardSuccess()]);
        });
        it("profileError if submit profile request is failed", async () => {
            const payload = {};
            const dispatched = await recordSaga(fetchProfileSubmit, profileSubmitRequest(payload));
            const error = "Some error";
            expect(sendCard).toHaveBeenCalled();
            expect(dispatched).toEqual([sendCardFailure(error)]);
        });
    });
});