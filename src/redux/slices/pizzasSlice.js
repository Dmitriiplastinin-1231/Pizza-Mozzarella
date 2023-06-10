import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import fetchPizzas from "../../Api/Api";

export const pizzaFetch = createAsyncThunk(
    'pizzas/pizzaFetch',
    async (params, thunkAPI) => {
        const { currentCategory, sortCategory, currentSort, searchInputValue, currentPage } = params;
        const response =  await fetchPizzas(currentCategory, sortCategory[currentSort], searchInputValue, currentPage);
        if (response.length === 0) {
            return thunkAPI.rejectWithValue('pizzas not found');
        }
        return response;

    }
);

const initialState = {
    pizzas: [],
    currentPage: 0,
    fetchStatus: 'successful'
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
        },
        loaded: (state) => {
            debugger
            state.isLoading = !state.isLoading;
        }
    },
    extraReducers: {
        [pizzaFetch.pending]: state => {
            state.fetchStatus = 'pending';
        },
        [pizzaFetch.fulfilled]: (state, action) => {
            if (action.payload) {
                state.pizzas = action.payload
                state.fetchStatus = 'successful';
            }
        },
        [pizzaFetch.rejected]: state => {
            debugger
            state.fetchStatus = 'notPizzas';
        }
    }
});

export const { setPizzas, setCurrentPage, selectPizza, loaded } = pizzasSlice.actions;

export default pizzasSlice.reducer;