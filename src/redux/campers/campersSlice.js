import { createSlice } from '@reduxjs/toolkit';
import { fetchAllCampers, fetchOneCamperById } from './operations';

const initialState = {
    data: {},
    selected: null,
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
            .addCase(fetchOneCamperById.pending, state => { state.loading = false; })
            .addCase(fetchOneCamperById.fulfilled, (state, action) => {
                state.loading = false
                const index = state.data.findIndex(item => item._id === action.payload._id)
                state.selected = state.data[index]
            })
            .addCase(fetchOneCamperById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload
            })

    },
});

export const campersReducer = campersSlice.reducer;
