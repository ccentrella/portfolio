import React from "react";
import PhotoIcon from "../../../../assets/images/icons/photo.svg";

function Block() {
    return (
        <div className="button-fixed-container-dark circle-icon-container">
            <div className="circle-icon-outer">
                <div className="flex-col circle-icon-left">
                    <div className="circle-icon">
                        <a target="_blank" href="https://lightroom.adobe.com/gallery/35c62e7ff3ce476f9ae5b07994eb6f15">
                            <img src={PhotoIcon} alt="photos icon" />
                        </a>
                    </div>
                </div>
                <div className="flex-col circle-icon-right">
                    <p className="section-title circle-icon-title">
                        <a target="_blank"
                            href="https://lightroom.adobe.com/gallery/35c62e7ff3ce476f9ae5b07994eb6f15">
                            Photo Gallery
                        </a>
                    </p>
                    <div className="buttons-desktop">
                        <a
                            className="button-fixed circle-icon-button"
                            target="_blank"
                            href="https://lightroom.adobe.com/gallery/35c62e7ff3ce476f9ae5b07994eb6f15">
                            View Gallery
                        </a>
                    </div>
                </div>
            </div>
            <a
                className="button-fixed circle-icon-button"
                target="_blank"
                href="https://lightroom.adobe.com/gallery/35c62e7ff3ce476f9ae5b07994eb6f15">
                View Gallery
            </a>
        </div>
    );
}

export default Block;
