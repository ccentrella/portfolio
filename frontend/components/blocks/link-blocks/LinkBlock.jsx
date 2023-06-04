import React from "react";
import { Link } from "react-router-dom";

function LinkBlock({ title, icon, links, expandIcon=false }) {
    if (links == null) {
        return null;
    }

    let [linkDescription, linkPath, isExternal] = links[0];
    icon = getIcon(title, icon, linkPath, isExternal);
    title = getTitle(title, linkPath, isExternal);
    links = getLinks(links);

    return (
        <div className="circle-icon-container">
            <div className={"circle-icon-outer " + (expandIcon && "wide")}>
                <div className="flex-col circle-icon-left">
                    <div className="circle-icon">{icon}</div>
                </div>
                <div className="flex-col circle-icon-right">
                    <p className="circle-icon-title">{title}</p>
                    <div className="buttons-desktop">
                        {links.map((link) => (
                            <React.Fragment key={link.key}>
                                {link}
                                <br />
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
            {links.map((link) => (
                <React.Fragment key={link.key}>
                    {link}
                    <br />
                </React.Fragment>
            ))}
        </div>
    );
}

function getIcon(title, icon, linkPath, isExternal) {
    if (isExternal) {
        return (
            <a target="_blank" href={linkPath}>
                <img src={icon} alt={title + " icon"} />
            </a>
        );
    } else {
        return (
            <Link to={linkPath}>
                <img src={icon} alt={title + " icon"} />
            </Link>
        );
    }
}

function getTitle(title, linkPath, isExternal) {
    if (isExternal) {
        return (
            <a target="_blank" href={linkPath}>
                {title}
            </a>
        );
    } else {
        return <Link to={linkPath}>{title}</Link>;
    }
}

function getLinks(links) {
    return links.map((link) => {
        let [linkDescription, linkPath, isExternal] = link;
        if (isExternal) {
            link = (
                <a key={linkDescription} className="button-fixed circle-icon-button" target="_blank" href={linkPath}>
                    {linkDescription}
                </a>
            );
        } else {
            link = (
                <Link key={linkDescription} className="button-fixed circle-icon-button" to={linkPath}>
                    {linkDescription}
                </Link>
            );
        }
        return link;
    });
}

export default LinkBlock;
