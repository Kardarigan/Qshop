import React, { useState, useEffect, createContext } from "react";
import allProduct from "../assets/allProduct";

export const TheContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i = 0; i < allProduct.length; i++) {
        cart[i] = {};
    }
    return cart;
};

const TheContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (productID, count, selectedSize, selectedColor) => {
        setCartItems((prev) => ({
            ...prev,
            [productID]: {
                ...prev[productID],
                count,
                selectedSize,
                selectedColor,
            },
        }));
    };

    const removeFromCart = (productID) => {
        setCartItems((prev) => ({ ...prev, [productID]: {} }))
    }

    const increasProduct = (productID) => {
        setCartItems((prev) => ({ ...prev, [productID]: { ...prev[productID], count: prev[productID].count + 1 } }));
    }

    const dicreasProduct = (productID) => {
        setCartItems((prev) => ({ ...prev, [productID]: { ...prev[productID], count: prev[productID].count - 1 } }));
    }

    useEffect(() => {
        console.log(cartItems);
    }, [cartItems]);

    const contextValue = {
        allProduct,
        cartItems,
        addToCart,
        removeFromCart,
        increasProduct,
        dicreasProduct,
    };

    return (
        <TheContext.Provider value={contextValue}>
            {props.children}
        </TheContext.Provider>
    )
}

export default TheContextProvider;