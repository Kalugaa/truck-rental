import { createSlice } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from "redux-persist/lib/storage";

const initialState = {
    data: [],
};

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFavorites: (state, action) => {
            state.data.push(action.payload);
        },
        removeFavorites: (state, action) => {
            state.data = state.data.filter((el) => el._id !== action.payload);
        },
    },
});

export const { addFavorites, removeFavorites } = favoritesSlice.actions;
const favoritesReducer = favoritesSlice.reducer;

const persistConfigFav = {
    key: "favorites",
    storage,
};

export const persistReducerFavorites = persistReducer(
    persistConfigFav,
    favoritesReducer
);