import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <section className="login flexCentralizer">
            <form className="form p-5">
                <h1>Sign in :</h1>
                <input type="email" className="field mt-3" placeholder="Email Address..." required />
                <input type="password" className="field mt-3" placeholder="Password..." required />
                <p className="mt-4">By continue you'll Accept all the <Link to="/Policies" className="text-link">Policies</Link> again.</p>
                <input type="submit" className="button button-classic" />
                <hr />
                <p>Your don't have Account? <Link to='/Register' className="text-link">Create it now</Link></p>
            </form>
        </section>
    );
}
