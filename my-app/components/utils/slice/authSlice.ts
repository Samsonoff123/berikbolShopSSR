import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchAuth: any = createAsyncThunk('auth/fetchAuth', async (params) => {
    const { data } = await axios.post('https://fakestoreapi.com/auth/login', params)
    return data
})

const initialState = {
    data: null,
    status: 'loading'

}

const authSlice = createSlice ({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.data = null
        }
    },
    extraReducers: {
        [fetchAuth.pending] : (state)=>{
            state.data = null;
            state.status = 'loading';
        },
        [fetchAuth.fulfilled] : (state, action)=>{
            state.data = action.payload;
            state.status = 'loaded';
        },
        [fetchAuth.rejected] : (state)=>{
            state.data = null;
            state.status = 'error';
        },

    }
})

export const authReducer = authSlice.reducer
