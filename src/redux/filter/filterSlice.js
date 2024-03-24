import { createSlice } from "@reduxjs/toolkit";
const filterSlice = createSlice({
    name: "filter",
    initialState: {
        location: "",
        details: {
            ac: false,
            automatic: false,
            kitchen: false,
            tv: false,
            bathroom: false,
        },
        form: null,
    },
    reducers: {
        filterUse(_, action) {
            return action.payload;
        },
    },
});
export const { filterUse } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;