import React, { useState, useEffect, createContext } from "react";
import all_product from "../assets/all_product"

export const TheContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i = 0; i < all_product.length + 1; i++) {
        cart[i] = 0
    }
    return cart;
}

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
        setCartItems((prev) => ({ ...prev, [productID]: prev[productID] = 0 }));
    }

    const increasProduct = (productID) => {
        setCartItems((prev) => ({ ...prev, [productID]: prev[productID] + 1 }));
    }
    const dicreasProduct = (productID) => {
        setCartItems((prev) => ({ ...prev, [productID]: prev[productID] - 1 }));
    }

    useEffect(() => {
        console.log(cartItems);
    }, [cartItems]);

    const contextValue = {
        all_product,
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