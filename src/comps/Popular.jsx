import React from "react";
import Products from "./functions/Products";

export default function Popular() {

    return (
        <>
            <section className="py-5 mt-3">
                <h3>. POPULAR BY WOMEN</h3>
                <hr />
                <div className="row gy-3">
                    <Products category="women" slice="4" />
                </div>
            </section>
            <section className="py-5">
                <h3>. POPULAR BY MEN</h3>
                <hr />
                <div className="row gy-3">
                    <Products category="men" slice="4" />
                </div>
            </section>
        </>
    );
}