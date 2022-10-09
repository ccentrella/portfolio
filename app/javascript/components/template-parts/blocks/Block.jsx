import React from "react";
import { Link } from "react-router-dom";

function Block({ title, icon, link_description, link_path }) {
    return (
        <div className="button-fixed-container-dark circle-icon-container">
            <div className="circle-icon-outer">
                <div className="flex-col circle-icon-left">
                    <div className="circle-icon">
                        <Link to={link_path}>
                            <img src={icon} alt={title + " icon"} />
                        </Link>
                    </div>
                </div>
                <div className="flex-col circle-icon-right">
                    <p className="section-title circle-icon-title">
                        <Link to={link_path}>{title}</Link>
                    </p>
                    <div className="buttons-desktop">
                        <Link
                            className="button-fixed circle-icon-button"
                            to={link_path}>
                            {link_description}
                        </Link>
                    </div>
                </div>
            </div>
            <Link className="button-fixed circle-icon-button" to={link_path}>
                {link_description}
            </Link>
        </div>
    );
}

export default Block;
