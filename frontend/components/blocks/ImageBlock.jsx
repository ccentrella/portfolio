import React from "react";

function ImageBlock({ src, alt, color }) {
    return (
        <div className="image-block-backdrop">
            <img className="image-block-image" src={src} alt={alt} />
        </div>
    );
}

export default ImageBlock;
