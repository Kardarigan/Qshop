import React from "react";
import Data from "./assets/data"
import Card from "./Card";

export default function Popular() {
    return (
        <section className="py-5">
            <h3>. POPULAR BY WOMEN</h3>
            <hr />
            <div className="row gy-3">
                {Data.map((item, index) => {
                    return <Card key={index} title={item.title} cover={item.cover} price={item.price} date={item.date} />
                })}
            </div>
        </section>
    );
}
