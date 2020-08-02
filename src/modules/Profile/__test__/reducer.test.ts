import reducer from "../reducer";
import {profileSubmitRequest, sendCardSuccess, sendCardFailure} from "../actions";

const randomAction: any = {
    type: null
};

describe("Profile reducer", () => {
    const state0 = reducer(undefined, randomAction);
    const defaultSubmitData = {name: "", date: "", card: "", cvv: ""};
    const token = "fhjG6H4hsj4E";
    const filledData = {
        name: "Person",
        date: "12.05.2020",
        card: "1145 3566 6666 6666",
        cvv: "355",
        token
    };

    describe("profile submit request", () => {
        it("send profile submit request", () => {
            const state1 = reducer(state0, profileSubmitRequest(filledData));

            expect(state1).toEqual({
                profileSubmit: filledData,
                isLoading: true,
                profileError: "",
                isSubmit: false
            });
        });
        it("profile submit is success", () => {
            const state2 = reducer(state0, sendCardSuccess());

            expect(state2).toEqual({
                profileSubmit: defaultSubmitData,
                isLoading: false,
                profileError: "",
                isSubmit: true
            });
        });
        it("profile submit is failed", () => {
            const error = "Some error";
            const state3 = reducer(state0, sendCardFailure(error));

            expect(state3).toEqual({
                profileSubmit: defaultSubmitData,
                isLoading: false,
                profileError: error,
                isSubmit: false
            });
        });
    });
});