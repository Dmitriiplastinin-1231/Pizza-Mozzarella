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
        }
    }
});

export const { setPizzas, setCurrentPage } = pizzasSlice.actions;

export default pizzasSlice.reducer;