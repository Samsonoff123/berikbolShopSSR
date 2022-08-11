import { userAPI } from './../slice/userService';
import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../slice/posts'


const store = configureStore({
    reducer: {
        [userAPI.reducerPath]: userAPI.reducer
    }
})

export default store