import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0
};

const cartReducer = (state, action) => {

    if(action.type === 'ADD') {
        const updatedItems = state.items.concat(action.item);
        const updatedAmount = state.totalAmount + action.item.amount * action.item.price;
        return {
            items: updatedItems,
            totalAmount: updatedAmount
        }
    }
    return defaultCartState;
}

const CartProvider = (props) => {
    const [cartState, dispatchCartActions] = useReducer(cartReducer, defaultCartState);

    const addCartItemHander = (item) => {
        dispatchCartActions({type: 'ADD', item: item})
    }

    const removeCartItemHandler = (id) => {}


    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem:addCartItemHander,
        removeItem: removeCartItemHandler
    }
    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;