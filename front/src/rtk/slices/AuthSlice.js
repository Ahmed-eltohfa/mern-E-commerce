import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: localStorage.getItem('token') || '',
        user: {}
    },
    reducers: {
        removeToken: (state, action) => {
            state.token = '';
            localStorage.removeItem('token');
        },
        setToken: (state, action) => {
            state.token = action.payload;
            localStorage.setItem('token', state.token);
        },
        setUser: (state, action) => {
            state.user = action.payload;
        }
    }
});

export const { removeToken, setToken, setUser } = authSlice.actions;
export default authSlice.reducer;