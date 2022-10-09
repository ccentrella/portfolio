import React from "react";
import { Link } from "react-router-dom";

function Block({ title, icon, links }) {
    if (links == null) {
        return null;
    }

    let [linkDescription, linkPath, isExternal] = links[0];
    icon = getIcon(title, icon, linkPath, isExternal);
    title = getTitle(title, linkPath, isExternal);
    links = getLinks(links);

    return (
        <div className="button-fixed-container-dark circle-icon-container">
            <div className="circle-icon-outer">
                <div className="flex-col circle-icon-left">
                    <div className="circle-icon">{icon}</div>
                </div>
                <div className="flex-col circle-icon-right">
                    <p className="section-title circle-icon-title">{title}</p>
                    <div className="buttons-desktop">
                        {links.map((link) => (
                            <React.Fragment key={link.key}>
                                {link}
                                <br/>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
            {links}
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
                <a
                    key={linkDescription}
                    className="button-fixed circle-icon-button"
                    target="_blank"
                    href={linkPath}>
                    {linkDescription}
                </a>
            );
        } else {
            link = (
                <Link
                    key={linkDescription}
                    className="button-fixed circle-icon-button"
                    to={linkPath}>
                    {linkDescription}
                </Link>
            );
        }
        return link;
    });
}

export default Block;
