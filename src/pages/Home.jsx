import React from "react";
import Hero from "../comps/Hero";
import PopularW from "../comps/PopularW";
import Exclusive from "../comps/Exclusive";
import QaraProducts from "../comps/QaraProducts"
import NewsLetter from "../comps/NewsLetter";

export default function Home() {
    return (
        <>
            <Hero />
            <PopularW />
            <Exclusive />
            <QaraProducts />
            <NewsLetter />
        </>
    );
}
