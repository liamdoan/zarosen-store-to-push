import { createSlice } from '@reduxjs/toolkit';

const yourOrdersSlice = createSlice({
    name: 'orders',
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
    },
    reducers: {
        addOrders: (state, action) => {
            state.quantity += 1;
            state.products.push(action.payload);
            state.total += action.payload.price * action.payload.quantity;
        },
        // removeProduct:(state) => {
        //     state.products = [];
        //     state.quantity = 0;
        //     state.total = 0;
        // },
        clearOrders: (state) => {
            state.products = [];
            state.quantity = 0;
            state.total = 0;
        },
    },
});

export const { addOrders, clearOrders } = yourOrdersSlice.actions;
export default yourOrdersSlice.reducer;
