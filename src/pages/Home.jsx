import React, { useContext } from "react";
import Hero from "../comps/Hero";
import Popular from "../comps/Popular";
import Exclusive from "../comps/Exclusive";
import QaraProducts from "../comps/QaraProducts"
import NewsLetter from "../comps/NewsLetter";
import TheContext from "../comps/functions/TheContext";

export default function Home() {

    const { cartItems } = useContext(TheContext);
    console.log(cartItems);

    return (
        <>
            <Hero />
            <Popular />
            <Exclusive />
            <QaraProducts />
            <NewsLetter />
        </>
    );
}
