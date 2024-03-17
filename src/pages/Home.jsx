import React from "react";
import Hero from "../comps/Hero";
import Popular from "../comps/Popular";
import Exclusive from "../comps/Exclusive";
import QaraProducts from "../comps/QaraProducts"
import NewsLetter from "../comps/NewsLetter";

export default function Home() {

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
