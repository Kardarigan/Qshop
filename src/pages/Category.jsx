import React from "react";
import Products from "../comps/functions/Products";

export default function Category({ category, banner, title }) {

    const headerStyle = {
        backgroundImage: `url(${banner})`,
    };

    return (
        <section className="category">
            <div className="header text-center my-5" style={headerStyle}>
                <div>
                    <h1>{title.toUpperCase()}</h1>
                    <hr className="w-25 mx-auto" />
                </div>
            </div>
            <div className="row gy-3 py-5">
                <Products category={category.toLowerCase()} />
            </div>
        </section>
    );
}