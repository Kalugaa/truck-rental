import { configureStore } from '@reduxjs/toolkit';
import {
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import { campersReducer } from './campers/campersSlice';
import { filterReducer } from './filter/filterSlice';
import { persistReducerFavorites } from './favorites/favoritesSlice';



export const store = configureStore({
    reducer: {
        campers: campersReducer,
        filter: filterReducer,
        favorites: persistReducerFavorites
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export const persistor = persistStore(store);

