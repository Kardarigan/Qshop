import React from "react";
import Data from "./assets/all_product"
import Card from "./Card";

export default function Popular() {

    const exclusiveProducts = Data.filter(item => item.exclusive);
    const lastFourExclusiveProducts = exclusiveProducts.slice(-4);

    return (
        <section className="py-5">
            <h3>. Qara Exclusive</h3>
            <hr />
            <div className="row gy-3">
                {lastFourExclusiveProducts.map((item, index) => {
                    return <Card key={index} title={item.title} cover={item.cover} price={item.price} date={item.date} />
                })}
            </div>
        </section>
    );
}
