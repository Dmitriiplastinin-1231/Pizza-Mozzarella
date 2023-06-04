import { createSlice } from "@reduxjs/toolkit";

const initailState = {
    pizzas: []
};

const pizzasSlice = createSlice({
    name: 'pizzas',
    initailState,
    reducers: {
        setPizzas: (state, action) => {
            state.pizzas = action.payload;
        }
    }
});

export const { setPizzas } = pizzasSlice.actions;

export default pizzasSlice.reducer;