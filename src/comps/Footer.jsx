import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="pt-5 px-5 d-flex justify-content-around flex-column">

            <div className="d-flex align-items-center"></div>
            <div className="col-lg-7 row gy-3">
                <ul className="col-md-3">
                    <h4>HELP</h4>
                    <li><Link to="">ITEMS AND SIZES</Link></li>
                    <li><Link to="">GIFT OPTIONS</Link></li>
                    <li><Link to="">DELIVERIES</Link></li>
                    <li><Link to="">PAYMENTS & INVOICES</Link></li>
                    <li><Link to="">MY PURCHASES</Link></li>
                    <li><Link to="">EXCHANGES & REFUND</Link></li>
                    <li><Link to="">QARA EXPERIENCES</Link></li>
                </ul>
                <ul className="col-md-3">
                    <h4>FOLLOW US</h4>
                    <li><Link to="">INSTAGRAM</Link></li>
                    <li><Link to="">TIKTOK</Link></li>
                    <li><Link to="">X</Link></li>
                    <li><Link to="">FACEBOOK</Link></li>
                    <li><Link to="">YOUTUBE</Link></li>
                </ul>
                <ul className="col-md-3">
                    <h4>COMPANY</h4>
                    <li><Link to="">ABOUT US</Link></li>
                    <li><Link to="">CONTACT</Link></li>
                    <li><Link to="">HISTORY OF Q</Link></li>
                    <li><Link to="">OFFICES</Link></li>
                    <li><Link to="">WORK WITH US</Link></li>
                </ul>
                <ul className="col-md-3">
                    <h4>POLICIES</h4>
                    <li><Link to="">PRIVACY & POLICY</Link></li>
                    <li><Link to="">TERMS OF USE</Link></li>
                    <li><Link to="">WEBSITE COOKIES</Link></li>
                    <li><Link to="">COPYRIGHT</Link></li>
                </ul>
                <div className="col-12 d-flex pb-5">
                    <h3>QSHOP</h3><i class="fal fa-triangle mx-2"></i>
                    <h3>QARA</h3>
                </div>
            </div>

            <div className="d-flex justify-content-between py-3 border-top">
                <Link to="">UNITED STATES / ENGLISH</Link>
                <p>© ALL RIGHTS RESERVED</p>
            </div>

        </footer>
    );
}
