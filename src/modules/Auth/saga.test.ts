import authSaga, {fetchLogin} from "./saga";
import {recordSaga} from "../../recordSaga";
import {authFailure, authRequest, authSuccess} from "./actions";
import * as api from '../../api';
import {serverLogIn} from "../../api";

jest.mock("../../api", () => ({serverLogIn: jest.fn(() => true)}));
jest.mock("../../api", () => ({serverRegistration: jest.fn(() => true)}));

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
            // const loginRequest = jest.mock("../../api", () => ({serverLogIn: jest.fn(() => true)}));
            /*jest.spyOn(api, 'serverLogIn')
                .mockImplementation(() => Promise.resolve(data));*/
            const dispatched = await recordSaga(authSaga, authRequest(payload));

            expect(serverLogIn).toHaveBeenCalled();
            expect(dispatched).toEqual([{type: authSuccess.toString()}]);
        });
    });
});