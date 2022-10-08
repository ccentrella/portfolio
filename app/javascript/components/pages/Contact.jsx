import React from "react";
import { Link } from "react-router-dom";

function Contact() {
    return (
        <div className="container">
            <h1>Contact</h1>
            <p>
                Thank you for visiting my website. You can reach out to me via
                the form below.
            </p>
            <p>
                If you prefer to contact me via LinkedIn, you can use this link:
            </p>

            <div class="button-fixed-container">
                <a
                    className="button-fixed"
                    target="_blank"
                    href="https://linkedin.com/in/ccentrella">
                    LinkedIn Profile
                </a>
                <Link className="button-fixed" to="/">
                    View Homepage
                </Link>
            </div>
        </div>
    );
}

export default Contact;
