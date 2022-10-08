import React from "react";
import { Link } from "react-router-dom";

import Hero from "../Hero";

function Introduction() {
    return (
        <div>
            <Hero />
            <div className="container">
                <p className="section-title">Location: Lansing, MI</p>
            </div>
            <br/>
            <div className="button-fixed-container top bottom">
                <Link className="button-fixed" to="/">
                    Website Homepage
                </Link>
                <a
                    className="button-fixed"
                    target="_blank"
                    href="https://github.com/ccentrella">
                    View GitHub
                </a>
                <a
                    className="button-fixed"
                    target="_blank"
                    href="https://linkedin.com/in/ccentrella">
                    View LinkedIn
                </a>
            </div>
        </div>
    );
}

export default Introduction;
