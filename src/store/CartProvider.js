import React, { useReducer } from 'react';

import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0
};

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id);

        const existingCartItem = state.items[existingCartItemIndex];
        let updatedItems;

        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.item);
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }

    if (action.type === 'REMOVE') {
        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.id);
        const existingIem = state.items[existingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - existingIem.price;
        let updatedItems;
        if (existingIem.amount === 1) {
            updatedItems = state.items.filter(item => item.id !== action.id);
        } else {
            const updatedItem = { ...existingIem, amount: existingIem.amount - 1 }
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    };

    if (action.type === 'CLEAR') {
        return defaultCartState;
    }


    return defaultCartState
};

const CartProvider = props => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

    const addItemToCartHandler = item => {
        dispatchCartAction({ type: 'ADD', item: item });
    };

    const removeItemToCartHandler = id => {
        dispatchCartAction({ type: 'REMOVE', id: id });
    };

    const clearCartHadler = () => {
        dispatchCartAction({ type: 'CLEAR' });
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemToCartHandler,
        clearCart: clearCartHadler
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
};

export default CartProvider;