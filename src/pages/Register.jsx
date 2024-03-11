import React from "react";
import { Link } from "react-router-dom";

export default function Register() {
    return (
        <section className="login flexCentralizer">
            <form className="form p-5">
                <h1>Register :</h1>
                <input type="text" className="field mt-3" placeholder="User Name..." required />
                <input type="email" className="field mt-3" placeholder="Email Address..." required />
                <input type="password" className="field mt-3" placeholder="Password..." required />
                <p className="mt-4">By continue you'll Accept all the <Link to="/Policies" className="text-link">Policies</Link>.</p>
                <input type="submit" className="button button-classic" />
                <hr />
                <p>Your already have Account? <Link to='/Register' className="text-link">Login here</Link></p>
            </form>
        </section>
    );
}
