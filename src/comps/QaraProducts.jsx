import React from "react";
import Products from "../comps/functions/Products";

export default function QaraProducts() {
    return (
        <section className="py-5">
            <h3>. Qara Exclusive</h3>
            <hr />
            <div className="row gy-3">
                <Products brand='Qara' />
            </div>
        </section>
    );
}