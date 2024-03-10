import React from "react";
import Data from "../assets/all_product"
import Card from "../Card";

const Products = ({ category, slice = 0 }) => {
    const products = Data.filter((item) => item.category === category);
    if (slice != 0) {
        const slicedProducts = products.slice(-slice);
        return (
            slicedProducts.map((item, index) => (
                <Card key={index} title={item.title} cover={item.cover} price={item.price} date={item.date} />
            ))
        );
    }
    return (
        products.map((item, index) => (
            <Card key={index} title={item.title} cover={item.cover} price={item.price} date={item.date} />
        ))
    );
};

export default Products;