import React, { useContext, useState } from "react";
import { TheContext } from "../comps/functions/TheContext";
import Breadcrumb from "../comps/Breadcrumb";
import { Link } from "react-router-dom";
import Message from "../comps/Message";

export default function Cart() {
    const { all_product, cartItems, addToCart, removeFromCart, increasProduct, dicreasProduct } = useContext(TheContext);
    const [message, setMessage] = useState("");
    const [totalPrice, setTotalPrice] = useState(0);

    return (
        <section className="cart py-5">
            <Message message={message} show={message.length > 0} />
            <Breadcrumb cart />
            <h1 className="py-3">Shopping Cart: </h1>
            <hr className="mt-0" />
            {all_product.map((product, index) => {
                if (cartItems[product.id].count > 0) {
                    totalPrice = + product.price;

                    return (
                        <div className="d-flex justify-content-between" key={index}>
                            <div className="card-cart">
                                <Link to={`/${product.category}/Product/${product.id}`} onClick={window.scrollTo(0, 0)}>
                                    <img src={product.cover} alt={product.title} />
                                    <h2>{product.title}</h2>
                                </Link>
                                <span>{product.price}</span>
                                <span>{product.selectedSize}</span>
                                <span>{product.selectedColor}</span>
                                <span>{product.brand}</span>
                                <div className="addToCart">
                                    <button className="button button-classic" onClick={() => increasProduct(product.id)}>-</button>
                                    <span className="flexCentralizer">{cartItems[product.id]}</span>
                                    <button className="button button-classic" onClick={() => dicreasProduct(product.id)}>+</button>
                                </div>
                            </div>
                            <button onClick={() => removeFromCart(product.id)}>
                                <i className="fal fa-xmark" />
                            </button>
                        </div>
                    )
                }
            })}
            {!cartItems &&
                <h3> Your Shopping Cart is empty</h3>
            }
            <hr />
            <div className="d-flex justify-content-end">
                <span>Total Price : ${totalPrice}</span>
            </div>
        </section >
    );
}