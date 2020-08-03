import authSaga, {fetchLogin} from "../saga";
import {recordSaga} from "../../../recordSaga";
import {authFailure, authRequest, authSuccess} from "../actions";
import {serverLogIn, serverRegistration} from "../../../api";
import * as api from "../../../api";

jest.mock("../../../api", () => ({
    serverLogIn: jest.fn(() => true),
    serverRegistration: jest.fn(() => true)
}));

describe("auth saga", () => {
    beforeEach(() => jest.resetAllMocks());

    describe('#authenticate', () => {
        it("authSuccess if data is correct", async () => {
            const payload: any = {
                login: "test@test.com",
                password: "123123"
            };
            const someToken = "gfFdX543EEqtfd";
            const data = {
                success: true,
                error: "",
                token: someToken
            };
            const dispatched = await recordSaga(fetchLogin, authRequest(payload));
            expect(serverLogIn).toHaveBeenCalledTimes(1);
            expect(dispatched).toEqual(authSuccess(data.token));
        });
    });
});