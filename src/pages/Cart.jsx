import React, { useContext, useEffect, useState } from "react";
import { TheContext } from "../comps/functions/TheContext";
import Breadcrumb from "../comps/Breadcrumb";
import { Link } from "react-router-dom";
import Message from "../comps/Message";

export default function Cart() {
    const { allProduct, cartItems, addToCart, removeFromCart, increasProduct, dicreasProduct } = useContext(TheContext);
    const [message, setMessage] = useState("");

    console.log(cartItems);
    return (
        <section className="cart py-5">
            <Message message={message} show={message.length > 0} />
            <Breadcrumb cart />
            <h1 className="py-3">Shopping Cart: </h1>
            <hr className="mt-0" />
            {cartItems.length > 0 ? (
                cartItems.map((product, index) => {
                    const productInfo = allProduct.find(p => p.id === product.id);
                    return (
                        <div className="d-flex justify-content-between mt-3" key={index}>
                            <div className="cart-card d-flex">
                                <Link to={`/${productInfo.category}/Product/${productInfo.id}`} onClick={window.scrollTo(0, 0)}>
                                    <img src={productInfo.cover} alt={productInfo.title} />
                                </Link>
                                <div className="ms-2">
                                    <h2><Link to={`/${productInfo.category}/Product/${productInfo.id}`} onClick={window.scrollTo(0, 0)}>{productInfo.title}</Link></h2>
                                    <p className="mb-2">${productInfo.price}</p>
                                    <p className="mb-2">Size: {product.selectedSize}</p>
                                    <p className="mb-2">Color: {product.selectedColor}</p>
                                    <p className="mb-2">{productInfo.brand}</p>
                                    <div className="addToCart">
                                        <button className="button button-classic" onClick={() => dicreasProduct(product.id)}>-</button>
                                        <span className="flexCentralizer">{product.quantity}</span>
                                        <button className="button button-classic" onClick={() => increasProduct(product.id)}>+</button>
                                    </div>
                                </div>
                            </div>
                            <button onClick={() => removeFromCart(product.id)}>
                                <i className="fal fa-xmark" />
                            </button>
                        </div>
                    )
                })
            ) : (
                <h3> Your Shopping Cart is empty</h3>
            )}
            {allProduct.map((item, i) => {
                if (cartItems[item.id]) {
                    <p>{item.title}</p>
                }
            })}
            <hr />
            <div className="d-flex align-items-center justify-content-between">
                <button className="button button-classic">Go to Checkout</button>
            </div>
        </section>
    );
}