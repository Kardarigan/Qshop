import React, { useEffect } from "react";
import Data from "../assets/all_product"
import Card from "../Card";

const Products = ({ category, slice = 0, setProductsNum = () => { } }) => {
    const products = Data.filter((item) => item.category === category);
    const productsNum = products.length;

    useEffect(() => {
        setProductsNum(productsNum);
    }, [productsNum, setProductsNum]);


    if (slice != 0) {
        const slicedProducts = products.slice(-slice);
        return (
            slicedProducts.map((item, index) => (
                <Card key={index} id={item.id} title={item.title} category={item.category} cover={item.cover} price={item.price} date={item.date} />
            ))
        );
    }
    if (productsNum === 0) {
        return (
            <h3 className="text-center fs-1 px-3 flexCentralizer" style={{ height: "80vh" }}>There is no any items in {category} Category for Now...</h3>
        )
    }
    return (
        products.map((item, index) => (
            <Card key={index} id={item.id} title={item.title} category={item.category} cover={item.cover} price={item.price} date={item.date} />
        ))
    );
};

export default Products;