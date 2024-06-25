import { configureStore } from "@reduxjs/toolkit";

import filtersSlice from "./filtersSlice";
import contactsSlice from "./contactsSlice";

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const filterConfig = {
    key: "filtersValue",
    storage,
    whitelist: ["name"],
};

const contactsConfig = {
    key: "items",
    storage,
    whitelist: ["items"],
};

const pFilterConfig = persistReducer(filterConfig, filtersSlice);

const pContactsConfig = persistReducer(contactsConfig, contactsSlice);

export const store = configureStore({
    reducer: {
        contacts: pContactsConfig,
        filters: pFilterConfig,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);