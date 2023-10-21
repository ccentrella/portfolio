import React from "react";
import LinkBlock from "./LinkBlock";
import PhotoIcon from "../../../../../assets/images/icons/photo.svg";

function PhotosLinkBlock() {

    const links = [{
        linkDescription: "View Gallery",
        linkPath: "https://lightroom.adobe.com/gallery/35c62e7ff3ce476f9ae5b07994eb6f15",
        isExternal: true
    }];

    return (
        <LinkBlock
            title="Photo Gallery"
            icon={PhotoIcon}
            links={links}
        />
    );
}

export default PhotosLinkBlock;
