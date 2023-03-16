import React, { createContext, useState } from "react";

export const CartContext = createContext(``);

const CartContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        const itemIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id);

        if (itemIndex === -1) {
            setCartItems([...cartItems, { ...item, quantity: 1 }]);
        } else {
            const newCartItems = [...cartItems];
            newCartItems[itemIndex].quantity++;
            setCartItems(newCartItems);
        }
    };

    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
