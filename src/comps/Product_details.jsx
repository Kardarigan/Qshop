import React from "react";
import Breadcrumb from "./Breadcrumb";

export default function Product_details(props) {
    const { product } = props;

    return (
        <section className="details py-5">
            <Breadcrumb product={product} />
            <div className="row mt-5">
                <div className="col-lg-1 d-flex justify-content-between flex-column gallery-thumb">
                    <img src={product.cover} alt={product.title} />
                    <img src={product.cover} alt={product.title} />
                    <img src={product.cover} alt={product.title} />
                    <img src={product.cover} alt={product.title} />
                    <img src={product.cover} alt={product.title} />
                </div>
                <div className="col-lg-5 gallery-main">
                    <img src={product.cover} alt={product.title} />
                </div>
                <div className="col-lg-6 d-flex justify-content-between flex-column">
                    <h1>{product.title}</h1>
                    <h2>
                        {product.oldPrice ? <><del>${product.oldPrice}</del>${product.price}</> : <>${product.price}</>}
                    </h2>
                    {product.express && <h4><i class="fal fa-shipping-fast me-2" />Express Delivery</h4>}
                    <div className="sizes">
                        {product.sizes.map((size) => (
                            <label htmlFor={`buttonSize${size}`} >
                                <input type="radio" />
                            </label>
                        ))}
                    </div>
                    <div className="addToCart">

                    </div>

                </div>
            </div>
        </section >
    );
}
