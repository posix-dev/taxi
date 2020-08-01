import { createStore, applyMiddleware } from "redux";
import rootReducer from "./modules";
import logger from 'redux-logger';
import { authMiddleware } from "./modules/Auth";
import {loadState, saveState} from "./localStorage";
import {profileMiddleware} from "./modules/Profile";
import {orderMiddleware} from "./modules/Order";
import {addressMiddleware} from "./modules/Address";

const persistedState = loadState();

export const createMainStore = () => {

    const store = createStore(
        rootReducer,
        persistedState,
        applyMiddleware(
            logger,
            authMiddleware,
            profileMiddleware,
            orderMiddleware,
            addressMiddleware
        )
    );

    store.subscribe(() => {
        saveState({
            auth: store.getState().auth,
            profile: store.getState().profile,
            order: store.getState().order,
            address: store.getState().address
        });
    });

    return store;
};