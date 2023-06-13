import { configureStore } from "@reduxjs/toolkit";
import sort from "./slices/sortSlice";
import pizzas from "./slices/pizzasSlice";
import cart from "./slices/cartSlice";

const store = configureStore({
    reducer: {
        sort,
        pizzas,
        cart
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;