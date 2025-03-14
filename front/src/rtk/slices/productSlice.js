import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/products/list`);
        return response.data;
    }
);

export const productSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        currency: '$',
        shipping: 10,
        filters: {
            type: [],
            category: [],
            sort: 'relavent'
        },
        search: false,
    },
    reducers: {
        add: (state, action) => {
            state.products = [...state.products, ...action.payload]
        },
        set: (state, action) => {
            state.products = [...action.payload]
        },
        setFilters: (state, action) => {
            state.filters = action.payload;
        },
        setSearch: (state, action) => {
            state.search = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.products = action.payload.data;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
            });
    }
});
;

export const { add, set, setFilters, setSearch } = productSlice.actions;
export default productSlice.reducer;