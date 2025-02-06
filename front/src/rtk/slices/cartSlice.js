import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products:
            [],
        price: 0,
        num: 0
    },
    reducers: {
        addToCart: (state, action) => {
            const { product, size } = action.payload;
            const existingProduct = state.products.find(p => p.product._id === product._id && p.size === size);
            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                const toadd = { product, size, quantity: 1 };
                state.products = [...state.products, toadd];
            }
            state.price += product.price;
            state.num += 1;
        },
        removeFromCart: (state, action) => {
            const { product, size } = action.payload;
            const existingProduct = state.products.find(p => p.product._id === product._id && p.size === size);
            if (existingProduct) {
                existingProduct.quantity -= 1;
                state.price -= product.price;
                state.num -= 1;
            }
        },
        deleteFromCart: (state, action) => {
            const { product, size } = action.payload;
            const quantity = state.products.find(p => p.product._id === product._id && p.size === size).quantity;
            state.products = state.products.filter(p => p.product._id !== product._id || p.size !== size);
            state.price -= product.price * quantity;
            state.num -= quantity;
        },
        emptyCart: (state) => {
            state.products = [];
            state.price = 0;
            state.num = 0;
        }
    }
});

export const { addToCart, removeFromCart, deleteFromCart } = cartSlice.actions;
export default cartSlice.reducer;