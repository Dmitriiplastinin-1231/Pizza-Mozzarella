import CartItem from "./CartItem";
import { useDispatch } from "react-redux";
import { delOnePizzaType, editPizzaAmount } from "../../../redux/slices/cartSlice";


const CartItemContainer = (props) => {

    const dispatch = useDispatch();

    const delPizzaType = (id, pizzaCurrentSize, pizzaCurrentType) => {
        dispatch(delOnePizzaType({ id, pizzaCurrentSize, pizzaCurrentType }));
    };
    const editAmount = (id, pizzaCurrentSize, pizzaCurrentType, flag) => {
        dispatch(editPizzaAmount({ id, pizzaCurrentSize, pizzaCurrentType, flag }));
    };

    return <CartItem {...props} delPizzaType={delPizzaType} editPizzaAmount={editAmount} />
};

export default CartItemContainer;