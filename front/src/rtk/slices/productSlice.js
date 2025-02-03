import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../assets/frontend_assets/assets";


export const productSlice = createSlice({
    name: 'products',
    initialState: {
        products: products,
        currency: '$',
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