import React from "react";
import { Link, NavLink } from "react-router-dom";
import MenuIcon from "../../../assets/images/icons/menu.svg";

function Header() {
    return (
        <>
            <header>
                <img
                    src="/assets/favicon.png"
                    alt="profile image"
                    className="logo-image"
                />
                <h1 class="logo">
                    <NavLink to="/">Chris Centrella</NavLink>
                </h1>
                <label className="menu-toggle" for="toggle">
                    <img
                        src={MenuIcon}
                        className="menu-toggle-image"
                        alt="menu icon"
                    />
                </label>
                <input type="checkbox" id="toggle" />
                <nav className="navbar">
                    <ul>
                        <li className="nav-item">
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/resume">Resume</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/highlights">Highlights</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/specialties">Specialties</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/interests">Interests</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/blog">Blog</NavLink>
                        </li>
                        <li className="nav-item">
                            <a
                                target="_blank"
                                href="https://lightroom.adobe.com/gallery/35c62e7ff3ce476f9ae5b07994eb6f15">
                                Photo Gallery
                            </a>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact">Contact Me</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
            <div className="navbar-sticky">
                <h1 className="logo">
                    <Link to="/">CC</Link>
                </h1>
            </div>
        </>
    );
}

export default Header;
