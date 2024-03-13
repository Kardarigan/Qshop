import React from "react";
import { Link } from "react-router-dom";

export default function Card(product) {
    const category = product.category ? product.category.slice(0, 1).toUpperCase() + product.category.slice(1) : 'Unknown';

    return (
        <div className="col-lg-3 col-md-4 col-6">
            <Link to={`/${category}/Product/${product.id}`}>
                <div className="qard">
                    <img src={product.cover} alt={product.title} />
                    <div className="p-2">
                        <h2>{product.title}</h2>
                        <hr />
                        <div className="d-flex justify-content-between">
                            <span>${product.price}</span>
                            <span>{product.date}</span>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}