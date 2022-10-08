import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/resume">Resume</Link>
                    </li>
                    <li>
                        <Link to="/interests">Interests</Link>
                    </li>
                    <li>
                        <Link to="/specialties">Specialties</Link>
                    </li>
                    <li>
                        <Link to="/highlights">Highlights</Link>
                    </li>
                </ul>
            </nav>
            <div className="navbar-sticky">
                <h1 className="logo">
                    <a href="/">CC</a>
                </h1>
            </div>
        </header>
    );
}

export default Header;
