import { IProduct } from './product.types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState:IProduct[] = []

export const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action:PayloadAction<IProduct>) => {
            state.push(action.payload)
        },

        removeItem: (state, action: PayloadAction<{id :number}>) => {
            return state.filter(p => p.id !== action.payload.id)
        },
    }
})

export const cartReducer = CartSlice.reducer
export const cartActions = CartSlice.actions