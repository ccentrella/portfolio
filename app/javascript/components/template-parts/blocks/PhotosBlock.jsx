import React from "react";
import Block from "./Block";
import PhotoIcon from "../../../../assets/images/icons/photo.svg";

function PhotosBlock() {
    return (
        <Block
            title="Photo Gallery"
            icon={PhotoIcon}
            links={[
                [
                    (linkDescription = "View Gallery"),
                    (linkPath = "https://lightroom.adobe.com/gallery/35c62e7ff3ce476f9ae5b07994eb6f15"),
                    (isExternal = true),
                ],
            ]}
        />
    );
}

export default PhotosBlock;
