import React from "react";
import { Link } from "react-router-dom";

import Hero from "./Hero";

function Introduction() {
    return (
        <div>
            <Hero />
            <p className="section-title zero-margin">Full Stack Software Engineer</p>
            <div className="container">
                <p className="resume-location">Location: Lansing, MI</p>
                <div className="resume-buttons">
                    <Link className="button-fixed" to="/">
                        Homepage
                    </Link>
                    <a className="button-fixed" target="_blank" href="https://github.com/ccentrella">
                        View GitHub
                    </a>
                    <a className="button-fixed" target="_blank" href="https://linkedin.com/in/ccentrella">
                        View LinkedIn
                    </a>
                    <Link className="button-fixed" to="/contact">
                        Contact Me
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Introduction;
