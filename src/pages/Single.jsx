import React, { useContext } from "react";
import all_product from "../comps/assets/all_product";
import { useParams } from "react-router-dom";
import Breadcrumb from "../comps/Breadcrumb";
import Product_details from "../comps/Product_details";

export default function Single() {

    const { productId } = useParams();
    const product = all_product.find((e) => e.id === Number(productId))
    return (
        <>
            <Product_details product={product} />
        </>
    );
}
