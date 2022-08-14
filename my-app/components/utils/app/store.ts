import { userAPI } from './../slice/userService';
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { cartReducer } from '../slice/cart.slice'

export const store = configureStore({
    reducer: { [userAPI.reducerPath] : userAPI.reducer, cart: cartReducer},
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(userAPI.middleware)
})

export type TypeRootState = ReturnType<typeof store.getState>