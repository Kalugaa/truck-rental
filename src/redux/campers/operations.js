import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

axios.defaults.baseURL = 'https://65858985022766bcb8c8d813.mockapi.io/v1/adverts/';

export const fetchAllCampers = createAsyncThunk('campers/getAll',
    async (_, thunkAPI) => {
        try {
            const { data } = await axios.get('')
            return data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    })
