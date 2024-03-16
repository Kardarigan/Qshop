import React, { useState } from "react";
import { createContext } from "react";
import all_product from "../assets/all_product"

export const TheContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i = 0; i < all_product.length + 1; i++) {
        cart[i] = 0
    }
    return cart
}

const contextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (productID) => {
        setCartItems((prev) => ({ ...prev, [productID]: prev[productID] + 1 }))
    }

    const remvoeFromCart = (productID) => {
        setCartItems((prev) => ({ ...prev, [productID]: prev[productID] - 1 }))
    }

    const contextValue = { all_product, cartItems, addToCart, remvoeFromCart };
    return (
        <TheContext.Provider value={contextValue}>
            {props.children}
        </TheContext.Provider>
    )
}


export default TheContextProvider;