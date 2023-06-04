import React from "react";
import ImageBlock from "../ImageBlock";

function DrivenSectionBlock({ src, alt, color }) {
    return (
        <div className="section-block thin">
            <div className="section-block-image flex-col">
                <ImageBlock src="/assets/highlights-driven.png" alt="driven image" color="#A5CBFA" />
            </div>
            <div className="section-block-content flex-col">
                <h2 className="button-label">Driven</h2>
                <p>Since an early age, I’ve been a motivated learner that has continuously taught myself to code and design well. Throughout my entire learning journey, one thing has remained:</p>
                <h3>Become the best.</h3>
                <p>
                    This principle drives everything that I do. From learning cutting-edge approaches to AI, to several classes in Graphic Design to bring innovation, to mastering the latest programming languages and frameworks, everything is driven
                    by a desire to be the best.{" "}
                </p>
            </div>
        </div>
    );
}

export default DrivenSectionBlock;
