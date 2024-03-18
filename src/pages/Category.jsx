import React, { useState } from "react";
import Products from "../comps/functions/Products";
import Breadcrumb from "../comps/Breadcrumb";

export default function Category({ category, banner, title }) {

    const [productNum, setProductNum] = useState(0);

    const bannerStyle = {
        backgroundImage: `url(${banner})`,
    };

    return (
        <section className="category">
            <div className="header text-center" style={bannerStyle}>
                <div>
                    <h1>{title.toUpperCase()}</h1>
                    <hr className="w-25 mx-auto" />
                </div>
            </div>
            <div className="d-flex justify-content-between mt-5 pt-2">
                <Breadcrumb category={category} />
                <p>
                    24 from {productNum} prods are shown
                </p>
                <div>
                    <span>Sort By: </span>
                    <select name="sort by" id="">
                        <option value="Newest">Newest</option>
                        <option value="Oldest">Oldest</option>
                        <option value="Price: High to Low">Price: High to Low</option>
                        <option value="Price: Low to High">Price: Low to High</option>
                    </select>
                </div>
            </div>
            <hr className="mt-0" />

            <div className="row gy-3 py-5 mt-3">
                <Products category={category.toLowerCase()} setProductsNum={(num) => setProductNum(num)} />
            </div>
        </section>
    );
}