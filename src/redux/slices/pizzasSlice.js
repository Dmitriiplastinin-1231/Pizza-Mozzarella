import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pizzas: [],
    currentPage:0
};

const pizzasSlice = createSlice({
    name: 'pizzas',
    initialState,
    reducers: {
        setPizzas: (state, action) => {
            state.pizzas = action.payload;
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
        selectPizza: (state, action) => {
            state.pizzas.find((pizza) => pizza.id === action.payload.id).selected = action.payload.selected + 1
        }
    }
});

export const { setPizzas, setCurrentPage, selectPizza } = pizzasSlice.actions;

export default pizzasSlice.reducer;