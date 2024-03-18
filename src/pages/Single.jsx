import React, { useContext } from "react";
import Data from "../comps/assets/allProduct";
import { useParams } from "react-router-dom";
import Product_details from "../comps/Product_details";
import Product_Discribtion from "../comps/Product_Discribtion";

export default function Single() {

    const { productId } = useParams();
    const product = Data.find((e) => e.id === Number(productId))
    return (
        <>
            <Product_details product={product} />
            <Product_Discribtion product={product} />
        </>
    );
}
