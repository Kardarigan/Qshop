import React from "react";
import { Link } from "react-router-dom";

export default function Card(product) {
    const category = product.category ? product.category.slice(0, 1).toUpperCase() + product.category.slice(1) : 'Unknown';

    return (
        <div className="col-lg-3 col-md-4 col-6">
            <Link to={`/${category}/Product/${product.id}`} onClick={window.scrollTo(0, 0)}>
                <div className="qard">
                    <img src={product.cover} alt={product.title} />
                    <div>
                        <h2 className="px-2 pt-2">{product.title}</h2>
                        <div className="d-flex justify-content-between qard-footer p-1">
                            <span className="price">
                                {product.oldPrice ? (
                                    <>
                                        <span>
                                            <del>${product.oldPrice}</del>
                                            ${product.price}
                                        </span>
                                        <span>
                                            {Math.round((product.oldPrice - product.price) / product.oldPrice * 100)}% OFF
                                        </span>
                                    </>
                                ) : (
                                    <span>${product.price}</span>
                                )}
                            </span>
                            <span className="click">CLICK</span>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}