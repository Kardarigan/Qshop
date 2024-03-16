import React, { useEffect } from "react";
import Data from "../assets/all_product"
import Card from "../Card";

const Products = ({ category = false, brand = false, slice = 0, setProductsNum = () => { } }) => {
    const products = category !== false ? Data.filter((item) => item.category === category) : Data;
    const productsNum = products.length;

    function cardMap(targets) {
        return (
            targets.map((item, index) => (
                <Card key={index} id={item.id} title={item.title} category={item.category} cover={item.cover} price={item.price} date={item.date} />
            ))
        );
    }

    useEffect(() => {
        setProductsNum(productsNum);
    }, [productsNum, setProductsNum]);

    let filteredProducts = products;

    if (slice) {
        filteredProducts = filteredProducts.slice(-slice);
    }

    if (brand) {
        filteredProducts = filteredProducts.filter(item => item.brand === brand);
    }

    if (filteredProducts.length === 0) {
        return (
            <h3 className="text-center fs-1 px-3 flexCentralizer" style={{ height: "80vh" }}>There is no any items in {category} Category for Now...</h3>
        )
    }

    return (
        cardMap(filteredProducts)
    );
};

export default Products;