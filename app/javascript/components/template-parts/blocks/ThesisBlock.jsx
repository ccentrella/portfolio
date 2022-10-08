import React from "react";
import ArticleIcon from "../../../../assets/images/icons/article.svg";

function Block() {
    return (
        <div className="button-fixed-container-dark circle-icon-container">
            <div className="circle-icon-outer">
                <div className="flex-col circle-icon-left">
                    <div className="circle-icon">
                        <a target="_blank" href="/assets/resources/thesis.pdf">
                            <img src={ArticleIcon} alt="article icon" />
                        </a>
                    </div>
                </div>
                <div className="flex-col circle-icon-right">
                    <p className="section-title circle-icon-title">
                        <a target="_blank" href="/assets/resources/thesis.pdf">
                            Senior Thesis
                        </a>
                    </p>
                    <div className="buttons-desktop">
                        <a
                            className="button-fixed circle-icon-button"
                            target="_blank"
                            href="/assets/resources/thesis.pdf">
                            Read Now
                        </a>
                    </div>
                </div>
            </div>
            <a
                className="button-fixed circle-icon-button"
                target="_blank"
                href="/assets/resources/thesis.pdf">
                Read Now
            </a>
        </div>
    );
}

export default Block;
