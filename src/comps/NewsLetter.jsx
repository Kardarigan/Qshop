import React from "react";

export default function NewsLetter() {
    return (
        <section className="newsLetter px-sm-5 px-3 py-5 my-5">
            <div className="text-center px-md-5">
                <h3>Weekly Qshap and Qara Offers just in your inbox</h3>
                <p className="text-dark">Subscribe to out Newsletter and hunt any offers</p>
                <form className="d-flex mt-5 col-md-7 mx-auto">
                    <input type="text" className="field border-end-0" placeholder="Your Email Address..." required />
                    <input type="submit" className="button button-arrow" />
                </form>
            </div>
        </section>
    );
}
