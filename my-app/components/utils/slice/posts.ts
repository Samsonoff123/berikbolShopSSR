import { createSlice } from '@reduxjs/toolkit';
interface UserState {
    users: {
        id: number,
        username: string,
        password: string,
    };
    isLoading: boolean;
    error: string;
}

const initialState = {
    users: [],
    isLoading: false,
    error: '',
}

export const userSlice = createSlice( {
    name: 'user',
    initialState,
    reducers: {
        usersFetching(state) {
            state.isLoading = true;
        },
        usersFetchingSuccess(state, action) {
            state.isLoading = false;
            state.error = '';
            state.users = action.payload
        },
        usersFetchingError(state, action) {
            state.isLoading = false;
            state.error = action.payload
        },
    }
})

export default userSlice.reducer