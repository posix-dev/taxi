import authSaga, {fetchLogin} from "./saga";
import {recordSaga} from "../../recordSaga";
import {authFailure, authRequest, authSuccess} from "./actions";
import {serverLogIn} from "../../api";

jest.mock("../../api", () => ({serverLogIn: jest.fn(() => true)}));
jest.mock("../../api", () => ({serverRegistration: jest.fn(() => true)}));

describe("auth saga", () => {
    beforeEach(() => jest.resetAllMocks());

    it("authSuccess if data is correct", async () => {
        const payload: any = {
            login: "test@test.com",
            password: "123123"
        };
        const someToken = "gfFdX543EEqtfd";

        const dispatched = await recordSaga(
            authSaga,
            authRequest(payload)
        );

        expect(serverLogIn).toHaveBeenCalled();
        expect(dispatched).toContainEqual([authSuccess(someToken)]);
    });
});