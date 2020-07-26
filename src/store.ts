import { createStore, applyMiddleware } from "redux";
import rootReducer from "./modules";
import logger from 'redux-logger';
import { authMiddleware } from "./modules/Auth";
import {loadState, saveState} from "./localStorage";

const persistedState = loadState();

export const createMainStore = () => {

    const store = createStore(
        rootReducer,
        persistedState,
        applyMiddleware(
            logger,
            authMiddleware
        )
    );

    store.subscribe(() => {
        saveState({
            auth: store.getState().auth
        });
    });

    return store;
};