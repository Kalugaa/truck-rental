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

export const fetchOneCamperById = createAsyncThunk('campers/getOne',
    async (id, thunkAPI) => {
        try {
            const { data } = await axios.get(`/${id}`)
            console.log(data);
            return data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    })