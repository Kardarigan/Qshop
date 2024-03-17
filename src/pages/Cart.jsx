import React, { useContext, useEffect, useState } from "react";
import { TheContext } from "../comps/functions/TheContext";
import Breadcrumb from "../comps/Breadcrumb";
import { Link } from "react-router-dom";
import Message from "../comps/Message";

const useTotalPrice = () => {
    const [totalPrice, setTotalPrice] = useState(0);

    const calculateTotalPrice = (cartItems) => {
        let total = 0;
        for (const key in cartItems) {
            const product = cartItems[key];
            total += product.price * product.quantity;
        }
        setTotalPrice(total);
    };

    return [totalPrice, calculateTotalPrice];
};

export default function Cart() {
    const { all_product, cartItems, addToCart, removeFromCart, increasProduct, dicreasProduct } = useContext(TheContext);
    const [message, setMessage] = useState("");
    const [totalPrice, calculateTotalPrice] = useTotalPrice();

    useEffect(() => {
        calculateTotalPrice(cartItems);
    }, [cartItems]);

    return (
        <section className="cart py-5">
            <Message message={message} show={message.length > 0} />
            <Breadcrumb cart />
            <h1 className="py-3">Shopping Cart: </h1>
            <hr className="mt-0" />
            {all_product.map((product, index) => {
                return (
                    <div className="d-flex justify-content-between mt-3" key={index}>
                        <div className="cart-card d-flex justify-content-between">
                            <Link to={`/${product.category}/Product/${product.id}`} onClick={window.scrollTo(0, 0)}>
                                <img src={product.cover} alt={product.title} />
                            </Link>
                            <div className="ms-2">
                                <h2><Link to={`/${product.category}/Product/${product.id}`} onClick={window.scrollTo(0, 0)}>{product.title}</Link></h2>
                                <p>${product.price}</p>
                                <p>Size: {product.selectedSize}</p>
                                <p>Color: {product.selectedColor}</p>
                                <p>{product.brand}</p>
                                <div className="addToCart">
                                    <button className="button button-classic" onClick={() => dicreasProduct(product.id)}>-</button>
                                    <span className="flexCentralizer">{cartItems[product.id]}</span>
                                    <button className="button button-classic" onClick={() => increasProduct(product.id)}>+</button>
                                </div>
                            </div>
                        </div>
                        <button onClick={() => removeFromCart(product.id)}>
                            <i className="fal fa-xmark" />
                        </button>
                    </div>
                )
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