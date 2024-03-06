import React from "react";

export default function Card(product) {
    return (
        <div className="card">
            <img src={product.cover} alt={product.title} />
            <h6>{product.title}</h6>
            <div className="d-flex justify-content-between">
                <span className="price">${product.price}</span>
                <span className="date">${product.date}</span>
            </div>
        </div>
    );
}
