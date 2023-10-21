import React from "react";
import {Link} from "react-router-dom";

function LinkBlock({title, icon, links = [{}], expandIcon = false}) {

    const {linkPath, isExternal} = links[0];
    const iconElement = isExternal ? (
        <a target="_blank" href={linkPath}>
            <img src={icon} alt={title + " icon"}/>
        </a>
    ) : (
        <Link to={linkPath}>
            <img src={icon} alt={title + " icon"}/>
        </Link>
    );
    const titleElement = isExternal ? (
        <a target="_blank" href={linkPath}>
            {title}
        </a>
    ) : <Link to={linkPath}>{title}</Link>;

    const buttons = links.map(({linkDescription, linkPath, isExternal}) => (
        <React.Fragment key={linkDescription}>
            {
                isExternal ? (
                    <a key={linkDescription} className="button-fixed circle-icon-button" target="_blank" href={linkPath}>
                        {linkDescription}
                    </a>
                ) : (
                    <Link key={linkDescription} className="button-fixed circle-icon-button" to={linkPath}>
                        {linkDescription}
                    </Link>)
            }
            <br/>
        </React.Fragment>
    ));

    return (
        <div className="circle-icon-container">
            <div className={"circle-icon-outer " + (expandIcon && "wide")}>
                <div className="flex-col circle-icon-left">
                    <div className="circle-icon">{iconElement}</div>
                </div>
                <div className="flex-col circle-icon-right">
                    <p className="circle-icon-title">{titleElement}</p>
                    <div className="buttons-desktop">
                        {buttons}
                    </div>
                </div>
            </div>
            {buttons}
        </div>
    );
}

export default LinkBlock;
