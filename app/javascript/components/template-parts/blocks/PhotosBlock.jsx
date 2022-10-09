import React from "react";
import Block from "./ExternalBlock";
import PhotoIcon from "../../../../assets/images/icons/photo.svg";

function PhotosBlock() {
    return (
        <Block
            title="Photo Gallery"
            icon={PhotoIcon}
            link_description="View Gallery"
            link_path="https://lightroom.adobe.com/gallery/35c62e7ff3ce476f9ae5b07994eb6f15"
        />
    );
}

export default PhotosBlock;
