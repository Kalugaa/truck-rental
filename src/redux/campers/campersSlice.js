import { createSlice } from '@reduxjs/toolkit';
import { fetchAllCampers } from './operations';

const initialState = {
    data: {},
    loading: false,
    error: null
};

const campersSlice = createSlice({
    name: 'campers',
    initialState,
    extraReducers: builder => {
        builder

            .addCase(fetchAllCampers.pending, state => { state.loading = true; })
            .addCase(fetchAllCampers.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;

            })
            .addCase(fetchAllCampers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload
            })

    },
});

export const campersReducer = campersSlice.reducer;
