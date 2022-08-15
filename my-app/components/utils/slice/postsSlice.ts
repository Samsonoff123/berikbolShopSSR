import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchPosts: any = createAsyncThunk('posts/fetchPosts', async (params) => {
    const { data } = await axios.post('https://fakestoreapi.com/products', params)
    return data
})

const initialState = {
    data: null,
    status: 'loading'

}

const postsSlice = createSlice ({
    name: 'posts',
    initialState,
    reducers: {
        logout: (state) => {
            state.data = null
        }
    },
    extraReducers: {
        [fetchPosts.pending] : (state)=>{
            state.data = null;
            state.status = 'loading';
        },
        [fetchPosts.fulfilled] : (state, action)=>{
            state.data = action.payload;
            state.status = 'loaded';
        },
        [fetchPosts.rejected] : (state)=>{
            state.data = null;
            state.status = 'error';
        },

    }
})

export const postsReducer = postsSlice.reducer
