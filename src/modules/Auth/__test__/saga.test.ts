import {fetchLogin, fetchRegister} from "../saga";
import {recordSaga} from "../../../recordSaga";
import {authFailure, authRequest, authSuccess, registrationRequest} from "../actions";
import {serverLogIn, serverRegistration} from "../../../api";

jest.mock("../../../api", () => ({
    serverLogIn: jest.fn()
        .mockImplementationOnce(() => ({ success: true, token: 'gfFdX543EEqtfd' }))
        .mockImplementationOnce(() => ({ success: false, error: 'Some error' })),
    serverRegistration: jest.fn()
        .mockImplementationOnce(() => ({ success: true, token: 'gfFdX543EEqtfd' }))
        .mockImplementationOnce(() => ({ success: false, error: 'Some error' })),
}));

describe("auth saga", () => {
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
            expect(serverLogIn).toHaveBeenCalled();
            expect(dispatched).toEqual([authSuccess(data.token)]);
        });
        it("authError if request is failed", async () => {
            const payload: any = {
                login: "fsdsfd@bubu.com",
                password: "098000"
            };
            const error = "Some error";

            const dispatched = await recordSaga(fetchLogin, authRequest(payload));
            expect(serverLogIn).toHaveBeenCalled();
            expect(dispatched).toEqual([authFailure(error)]);
        });
    });

    describe('#registration', () => {
        it("authSuccess if data is correct", async () => {
            const payload: any = {
                email: "test@test.com",
                password: "123123",
                name: "Pavel",
                surname: "Ark"
            };
            const someToken = "gfFdX543EEqtfd";
            const data = {
                success: true,
                error: "",
                token: someToken
            };

            const dispatched = await recordSaga(fetchRegister, registrationRequest(payload));
            expect(serverRegistration).toHaveBeenCalled();
            expect(dispatched).toEqual([authSuccess(data.token)]);
        });
        it("authError if request is failed", async () => {
            const payload: any = {
                email: "fsdsfd@bubu.com",
                password: "098000",
                name: "Pavel",
                surname: "Ark"
            };
            const error = "Some error";

            const dispatched = await recordSaga(fetchRegister, authRequest(payload));
            expect(serverRegistration).toHaveBeenCalled();
            expect(dispatched).toEqual([authFailure(error)]);
        });
    });
});