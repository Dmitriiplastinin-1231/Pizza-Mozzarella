import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import fetchPizzas from "../../Api/Api";
import { pizza, Status } from "../../@types/types";
import { sortCategory } from "../../@types/types";

export const pizzaFetch = createAsyncThunk<pizza[], {currentCategory: number, currentSort: sortCategory, searchInputValue: string, currentPage: number,}>(
    'pizzas/pizzaFetch',
    async (params, thunkAPI) => {
        const { currentCategory, currentSort, searchInputValue, currentPage } = params;
        const response =  await fetchPizzas(currentCategory, currentSort, searchInputValue, currentPage);
        if (response.length === 0) {
            return thunkAPI.rejectWithValue('pizzas not found');
        }
        return response;

    }
);

interface pizzaSliceState {
    pizzas: pizza[],
    currentPage: number,
    fetchStatus: Status,
    selectedPizzas: {id: number, amount: number}[]
}


const initialState: pizzaSliceState = {
    pizzas: [],
    currentPage: 0,
    fetchStatus: Status.PENDING,
    selectedPizzas: []
};

const pizzasSlice = createSlice({
    name: 'pizzas',
    initialState,
    reducers: {
        setPizzas: (state, action: PayloadAction<pizza[]>) => {
            state.pizzas = action.payload;
        },
        setCurrentPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload;
        },
        selectPizza: (state, action: PayloadAction<number>) => {
            const thisPizza = state.selectedPizzas.find((pizza) => pizza.id === action.payload);
            if (thisPizza) {
                thisPizza.amount++
            } else {
                state.selectedPizzas.push({ id: action.payload, amount: 1 });
            }
        },
        // loaded: (state) => {
        //     state.fetchStatus = !state.isLoading;
        // }
    },
    extraReducers: (builder) => {
        builder
            .addCase(pizzaFetch.pending, state => {
                state.fetchStatus = Status.PENDING;
            })
            .addCase(pizzaFetch.fulfilled, (state, action) => {
            if (action.payload) {
                state.pizzas = action.payload
                state.fetchStatus = Status.SUCCESS;
            }
            })
            .addCase(pizzaFetch.rejected, state => {
                state.fetchStatus = Status.REJECT;
            })
    }
});

export const { setPizzas, setCurrentPage, selectPizza } = pizzasSlice.actions;

export default pizzasSlice.reducer;