import React, { createContext } from "react";
import allProduct from "../assets/allProduct";

export const ShopContext = createContext(null)

const ShopContextProvider = (props) => {

    const contextValue = { allProduct };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;