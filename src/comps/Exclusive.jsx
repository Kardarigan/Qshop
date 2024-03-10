import React from "react";
import ExclusiveImg from "./assets/exclusive_image.png";
import { Link } from "react-router-dom";

export default function Exclusive() {
    return (
        <section className="exclusive px-5 my-5">
            <div className="row">
                <div className="col-md-8 d-flex flex-column justify-content-center p-md-0 py-5"><h3>For your first Qshop Experience<br />Exclusive Qara Products</h3>

                    <Link to="/" className="button button-arrow">Visit <i className="fa-light fa-arrow-right"></i></Link></div>
                <div className="col-4 d-md-block d-none">
                    <img src={ExclusiveImg} alt="Exclusive" />
                </div>
            </div>
        </section>
    );
}
