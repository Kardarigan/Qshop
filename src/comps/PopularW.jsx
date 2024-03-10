// Popular.js
import React from "react";
import Products from "./functions/Products";

export default function Popular() {
    return (
        <>
            <section className="py-5">
                <h3>. POPULAR BY WOMEN</h3>
                <hr />
                <div className="row gy-3">
                    <Products gender="women" />
                </div>
            </section>
            <section className="py-5">
                <h3>. POPULAR BY MEN</h3>
                <hr />
                <div className="row gy-3">
                    <Products gender="men" />
                </div>
            </section>
        </>
    );
}