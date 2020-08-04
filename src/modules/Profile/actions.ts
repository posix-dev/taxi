import { createAction } from "redux-actions";

const PROFILE_PATH = `my-app/Profile`;

export const profileSubmitRequest = createAction(`${PROFILE_PATH}/FETCH_PROFILE_SUBMIT`);
export const getProfileCardRequest = createAction(`${PROFILE_PATH}/FETCH_GET_CARD`);
export const sendCardSuccess = createAction(`${PROFILE_PATH}/SEND_CARD_SUCCESS`);
export const sendCardFailure = createAction(`${PROFILE_PATH}/SEND_CARD_FAILURE`);