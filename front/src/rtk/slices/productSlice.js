import { createSlice } from "@reduxjs/toolkit";



export const productSlice = createSlice({
    name: 'products',
    initialState: {
        products: [{ id: 1, price: 12, title: "hello" }],
    },
    reducers: {
        add: (state, action) => {
            state.products = [...state.products, ...action.payload]
        },
        set: (state, action) => {
            state.products = [...action.payload]
        }
    }
});

export const { add, set } = productSlice.actions;
export default productSlice.reducer;