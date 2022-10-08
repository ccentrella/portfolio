import React from "react";
import ArticleIcon from "../../../assets/images/icons/article.svg";
import { Link } from "react-router-dom";

function Block() {
    return (
        <div className="button-fixed-container-dark circle-icon-container">
            <div className="circle-icon-outer">
                <div className="flex-col circle-icon-left">
                    <div className="circle-icon">
                        <Link to="/resume">
                            <img src={ArticleIcon} alt="resume icon" />
                        </Link>
                    </div>
                </div>
                <div className="flex-col circle-icon-right">
                    <p className="section-title circle-icon-title">
                        <Link to="/resume">Work Experience</Link>
                    </p>
                    <div className="buttons-desktop">
                        <Link
                            className="button-fixed circle-icon-button"
                            to="/resume">
                            View Resume
                        </Link>
                        <a
                            className="button-fixed circle-icon-button"
                            target="_blank"
                            href="https://github.com/ccentrella">
                            My GitHub
                        </a>
                    </div>
                </div>
            </div>
            <Link className="button-fixed circle-icon-button" to="/resume">
                View Resume
            </Link>
            <a
                className="button-fixed circle-icon-button"
                target="_blank"
                href="https://github.com/ccentrella">
                My GitHub
            </a>
        </div>
    );
}

export default Block;
