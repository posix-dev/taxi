import { createStore, applyMiddleware } from "redux";
import rootReducer, {rootSaga} from "./modules";
import logger from 'redux-logger';
import createSagaMiddleware from "redux-saga";
import {loadState, saveState} from "./localStorage";

const persistedState = loadState();

export const createMainStore = () => {
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
        rootReducer,
        persistedState,
        applyMiddleware(
            logger,
            sagaMiddleware
        )
    );

    sagaMiddleware.run(rootSaga);

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