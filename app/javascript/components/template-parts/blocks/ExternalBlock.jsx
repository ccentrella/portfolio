import React from "react";

function Block({title, icon, link_description, link_path}) {
    return (
        <div className="button-fixed-container-dark circle-icon-container">
            <div className="circle-icon-outer">
                <div className="flex-col circle-icon-left">
                    <div className="circle-icon">
                        <a target="_blank" href={link_path}>
                            <img src={icon} alt={title + " icon"} />
                        </a>
                    </div>
                </div>
                <div className="flex-col circle-icon-right">
                    <p className="section-title circle-icon-title">
                        <a target="_blank"
                            href={link_path}>
                            {title}
                        </a>
                    </p>
                    <div className="buttons-desktop">
                        <a
                            className="button-fixed circle-icon-button"
                            target="_blank"
                            href={link_path}>
                            {link_description}
                        </a>
                    </div>
                </div>
            </div>
            <a
                className="button-fixed circle-icon-button"
                target="_blank"
                href={link_path}>
                {link_description}
            </a>
        </div>
    );
}

export default Block;
