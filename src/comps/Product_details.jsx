import React, { useState } from "react";
import Breadcrumb from "./Breadcrumb";
import Message from "./Message";

export default function Product_details(props) {

    const { product } = props;
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState("");
    const [selectedSize, setSelectedSize] = useState(null);


    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }

    };

    const handleIncrement = () => {
        if (count < product.quantity) {
            setCount(count + 1);
            setMessage("");
        } else if (message) {
            return
        } else {
            setMessage("Maximum number reached!");
            setTimeout(() => {
                setMessage("");
            }, 3000);
        }
    };


    return (
        <section className="details py-5">
            <Breadcrumb product={product} />
            <div className="row mt-5 gx-3 gallery">
                <div className="col-lg-1 col-2 d-flex justify-content-between flex-column gallery-thumb">
                    <img src={product.cover} alt={product.title} />
                    <img src={product.cover} alt={product.title} />
                    <img src={product.cover} alt={product.title} />
                    <img src={product.cover} alt={product.title} />
                    <img src={product.cover} alt={product.title} />
                </div>
                <div className="col-lg-5 col-10 gallery-main">
                    <img src={product.cover} alt={product.title} />
                </div>
                <div className="col-lg-6 d-flex justify-content-between flex-column details-content">
                    <div>
                        <h1>{product.title}</h1>
                        <h2>
                            {product.oldPrice ? <><del>${product.oldPrice}</del>${product.price}<span>{Math.round((product.oldPrice - product.price) / product.oldPrice * 100)}% OFF</span></> : <>${product.price}</>}
                        </h2>
                    </div>
                    <div>
                        {product.express && <h4><i class="fal fa-shipping-fast me-2" />Express Delivery</h4>}
                        <form className="sizes my-3">
                            {product.sizes.map((size) => (
                                <label>
                                    <input
                                        type="radio"
                                        value={size}
                                        checked={selectedSize === size}
                                        onChange={() => setSelectedSize(size)}
                                        required
                                    />
                                    <button type="button" onClick={() => setSelectedSize(size)}>
                                        {size}
                                    </button>
                                </label>
                            ))}
                        </form>
                        <div className="addToCart">
                            <button className="button button-classic" onClick={handleDecrement}>-</button>
                            <span className="flexCentralizer">{count}</span>
                            <button className="button button-classic" onClick={handleIncrement}>+</button>
                            <Message message={message} show={message.length > 0} />
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}
