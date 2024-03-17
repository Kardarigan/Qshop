import React, { useContext, useState } from "react";
import Breadcrumb from "./Breadcrumb";
import Message from "./Message";
import { TheContext } from "./functions/TheContext";

export default function Product_details(props) {

    const { product } = props;
    const [count, setCount] = useState(1);
    const [message, setMessage] = useState("");
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);
    const { addToCart } = useContext(TheContext)

    const fullStars = Array(product.rate).fill(true);
    const emptyStars = Array(5 - product.rate).fill(false);

    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }

    };

    const handleIncrement = () => {
        if (count < product.quantity) {
            setCount(count + 1);
        } else if (message) {
            return
        } else {
            setMessage("Maximum number reached!");
            setTimeout(() => {
                setMessage("");
            }, 3000);
        }
    };

    const handleAddToCart = () => {
        if (!selectedSize || !selectedColor) {
            setMessage("Please select a size and color before adding to cart.");
            return;
        }

        setMessage("Added to your Cart");
        addToCart(product.id, count, selectedSize, selectedColor);
    };


    return (
        <section className="details py-5">
            <Message message={message} show={message.length > 0} />
            <Breadcrumb product={product} />
            <div className="row mt-5 gx-3">
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
                        <h1 className="mt-lg-0 mt-4">{product.title}</h1>
                        <div className="rate my-2">
                            {fullStars.map((index) => (
                                <i class="fa-solid fa-star" key={index} />
                            ))}
                            {emptyStars.map((index) => (
                                <i class="fa-light fa-star" key={index + fullStars.length} />
                            ))}
                        </div>
                        <h2>
                            {product.oldPrice ? <><del>${product.oldPrice}</del>${product.price}<span>{Math.round((product.oldPrice - product.price) / product.oldPrice * 100)}% OFF</span></> : <>${product.price}</>}
                        </h2>
                    </div>
                    <div>
                        {product.express && <h4><i class="fal fa-shipping-fast me-2" />Express Delivery</h4>}
                        <form className="sizes my-3">
                            {product.sizes.map((size, index) => (
                                <label key={index}>
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
                        <form className="colors my-3">
                            {product.colors.map((color, index) => (
                                <label key={index}>
                                    <input
                                        type="radio"
                                        value={color}
                                        checked={selectedColor === color}
                                        onChange={() => setSelectedColor(color)}
                                        required
                                    />
                                    <button type="button" onClick={() => setSelectedColor(color)}>
                                        {color}
                                        <svg className="ms-2" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                            <circle r="50%" cx="50%" cy="50%" fill={color} />
                                        </svg>
                                    </button>
                                </label>
                            ))}
                        </form>
                        <div className="addToCart">
                            <button className="button button-classic" onClick={handleDecrement}>-</button>
                            <span className="flexCentralizer">{count}</span>
                            <button className="button button-classic" onClick={handleIncrement}>+</button>
                            <button className="button button-outline" onClick={handleAddToCart}>
                                {message ? message : "ADD"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}
