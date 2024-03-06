import React from "react";

export default function Card(product) {
    return (
        <div className="col-lg-3 col-md-4 col-6">
            <div className="card">
                <img src={product.cover} alt={product.title} />
                <div className="p-2">
                    <h2>{product.title}</h2>
                    <div className="d-flex justify-content-between">
                        <span>${product.price}</span>
                        <span>{product.date}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
