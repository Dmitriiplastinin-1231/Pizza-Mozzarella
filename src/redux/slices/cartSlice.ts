import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { cartPizza } from "../../@types/types";


interface CartSliceState {
    cartPizzas: cartPizza[];
    pizzasAmount: number;
    priceSum: number;
}

const initialState: CartSliceState = {
    cartPizzas: [],
    pizzasAmount: 0,
    priceSum: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setPizza: (state, action: PayloadAction<Omit<cartPizza, "amount">>) => {

            const thisPizza = state.cartPizzas.find(({ id, pizzaCurrentSize, pizzaCurrentType }) => {
                return id === action.payload.id
                    && pizzaCurrentSize === action.payload.pizzaCurrentSize
                    && pizzaCurrentType === action.payload.pizzaCurrentType
            })
            if (thisPizza) {
                thisPizza.amount++;
                state.pizzasAmount++;
                state.priceSum += action.payload.price;
            } else {
                state.cartPizzas.unshift({ ...action.payload, amount: 1 });
                state.pizzasAmount++;
                state.priceSum += action.payload.price;
            }
        },
        delAll: (state) => {
            state.cartPizzas = [];
            state.pizzasAmount = 0;
            state.priceSum = 0;
        },
        delOnePizzaType: (state, action: PayloadAction<cartPizza>) => {

            const indexThisPizza = state.cartPizzas.findIndex(({ id, pizzaCurrentSize, pizzaCurrentType }) => {
                return id === action.payload.id
                    && pizzaCurrentSize === action.payload.pizzaCurrentSize
                    && pizzaCurrentType === action.payload.pizzaCurrentType
            });
            const thisPizza = state.cartPizzas[indexThisPizza];

            state.priceSum -= thisPizza.price * thisPizza.amount;
            state.pizzasAmount -= thisPizza.amount;

            state.cartPizzas.splice(indexThisPizza, 1);
        },
        editPizzaAmount: (state, action: PayloadAction<cartPizza & {flag: boolean}>) => {

            const indexThisPizza = state.cartPizzas.findIndex(({ id, pizzaCurrentSize, pizzaCurrentType }) => {
                return id === action.payload.id
                    && pizzaCurrentSize === action.payload.pizzaCurrentSize
                    && pizzaCurrentType === action.payload.pizzaCurrentType
            });
            const thisPizza = state.cartPizzas[indexThisPizza];

            if (action.payload.flag) {
                thisPizza.amount++;
                state.pizzasAmount++;
                state.priceSum += thisPizza.price;
            } else {
                --thisPizza.amount;
                state.pizzasAmount--;
                state.priceSum -= thisPizza.price;
                if (thisPizza.amount === 0) {
                    state.cartPizzas.splice(indexThisPizza, 1);
                }
            }
        }
    }
});

export const { setPizza, delAll, delOnePizzaType, editPizzaAmount } = cartSlice.actions;

export default cartSlice.reducer;