import { configureStore, getDefaultMiddleware, Store } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    Persistor,
} from 'redux-persist';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import rootReducer from './slices/root.slice';
// import rootSaga from './sagas/root.saga';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';

type CreateStore = {
    store: Store;
    persistor: Persistor;
};

export const history = createBrowserHistory();

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer(history));

const createStore = (): CreateStore => {
    const sagaMiddleware = createSagaMiddleware();

    const store = configureStore({
        reducer: persistedReducer,
        middleware: [
            sagaMiddleware,
            routerMiddleware(history),
            ...getDefaultMiddleware({
                thunk: false,
                serializableCheck: {
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                },
            }),
        ],
    });

    // sagaMiddleware.run(rootSaga);

    const persistor = persistStore(store);

    return { store, persistor };
};

export default createStore;