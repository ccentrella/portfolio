import React from "react";
import { Link } from "react-router-dom";

import Hero from "./Hero";

function Introduction() {
    return (
        <div>
            <Hero />
            <p className="section-title zero-margin">Junior Software Engineer | Software Developer</p>
            <div className="container">
                <p className="resume-location">Location: Lansing, MI</p>
                <Link className="button-fixed button-thin" to="/">
                    Homepage
                </Link>
                <a className="button-fixed button-thin" target="_blank" href="https://github.com/ccentrella">
                    View GitHub
                </a>
                <a className="button-fixed button-thin" target="_blank" href="https://linkedin.com/in/ccentrella">
                    View LinkedIn
                </a>
            </div>
        </div>
    );
}

export default Introduction;
