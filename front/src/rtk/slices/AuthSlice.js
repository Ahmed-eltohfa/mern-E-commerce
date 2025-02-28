import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: localStorage.getItem('token') || '',
        user: localStorage.getItem('user') || ''
    },
    reducers: {
        removeToken: (state, action) => {
            state.token = '';
            localStorage.removeItem('token');
            localStorage.removeItem('user');
        },
        setToken: (state, action) => {
            state.token = action.payload;
            localStorage.setItem('token', state.token);
        },
        setUser: (state, action) => {
            state.user = action.payload;
            localStorage.setItem('user', state.user);
        }
    }
});

export const { removeToken, setToken, setUser } = authSlice.actions;
export default authSlice.reducer;