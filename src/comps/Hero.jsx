import React from "react";
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
                        <h3>New Season Sale Now</h3>
                    </div>
                </SplideSlide>
                <SplideSlide>

                    <div className="slide">
                        <h3>Price Fallout</h3>
                    </div>
                </SplideSlide>

                <SplideSlide>

                    <div className="slide">
                        <h3>Brand New Qshop Exclosive</h3>
                    </div>
                </SplideSlide>

                <div className="splide__progress">
                    <div className="splide__progress__bar" />
                </div>
            </Splide>
        </section>
    );
}
