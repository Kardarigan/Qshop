import React from "react";
import { Link } from "react-router-dom";

export default function Breadcrumb({ product = {}, category = false, cart = false } = {}) {
    return (
        <div className="breadcrumb d-flex align-items-center">
            <Link to="/">HOME</Link> <i className="fa fa-chevron-right px-2" />
            {category ? (
                category
            ) : cart ? (
                <>Cart</>
            ) : (
                <>
                    <Link to={`/${product.category}`}>{product.category}</Link> <i className="fa fa-chevron-right px-2" /> {product.title}
                </>
            )}
        </div>
    );
}