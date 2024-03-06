import React from "react";
import HeroImage from "./assets/hero_image.png";
import { Splide, SplideSlide } from '@splidejs/react-splide';

export default function Hero() {
    return (
        <section className="hero">
            <Splide aria-label="My Favorite Images" options={
                {
                    type: 'fade',
                    rewind: true,
                    autoplay: true,
                    arrows: false,
                }
            }>
                <SplideSlide>

                    <div className="slide">
                        <h2>New Season Sale Now</h2>
                    </div>
                </SplideSlide>
                <SplideSlide>

                    <div className="slide">
                        <h2>Price Fallout</h2>
                    </div>
                </SplideSlide>

                <SplideSlide>

                    <div className="slide">
                        <h2>Brand New Qshop Exclosive</h2>
                    </div>
                </SplideSlide>

                <div className="splide__progress">
                    <div className="splide__progress__bar" />
                </div>
            </Splide>
        </section>
    );
}
