import CartContext from "./Cart-Context"
import { useReducer } from "react";

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        // const updatedItems = state.items.concat(action.item)

        const existingCartIndex = state.items.findIndex((item) => item.id === action.item.id)
        const existingCartItem = state.items[existingCartIndex]

        let updatedCartItems;

        if (existingCartItem) {
            const updatedCartItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            };
            updatedCartItems = [...state.items];
            updatedCartItems[existingCartIndex] = updatedCartItem;
        } else {
            updatedCartItems = state.items.concat(action.item)
        }

        return {
            items: updatedCartItems,
            totalAmount: updatedTotalAmount
        }
    }

    if (action.type === 'REMOVE') {

        const existingCartIndex = state.items.findIndex((item) => item.id === action.id);
        const existingCartItem = state.items[existingCartIndex]
        const updatedTotalAmount = state.totalAmount - existingCartItem.price

        let updatedItems;

        if (existingCartItem.amount === 1) {
            updatedItems = state.items.filter(item => item.id !== action.id)
        } else {
            const updatedItem = { ...existingCartItem, amount: existingCartItem.amount - 1 };
            updatedItems = [...state.items]
            updatedItems[existingCartIndex] = updatedItem;
        }
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    return defaultCartState;
}

const CartProvider = props => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

    const addItemToCart = (item) => {
        dispatchCartAction({ type: 'ADD', item: item })
    };

    const removeItemFromCart = (id) => { dispatchCartAction({ type: 'REMOVE', id: id }) };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCart,
        removeItem: removeItemFromCart
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}


export default CartProvider;