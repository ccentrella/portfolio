import React from "react";
import ImageBlock from "../ImageBlock";

function CompetitiveSectionBlock({ src, alt, color }) {
    return (
        <div className="section-block thin">
            <div className="section-block-image flex-col">
                <ImageBlock src="/assets/highlights-competitive.png" alt="fibonacci program" color="#B9C4D1" />
            </div>
            <div className="section-block-content flex-col">
                <h2 className="button-label">Competitive</h2>
                <p>What is most important in my software engineering career?</p>
                <h3>Utilizing cutting-edge technologies to make a difference in people’s lives.</h3>
                <p>
                    I’ve always wanted to deliver the best, to bring customers the most refined and up-to-date experience, but in order to do this, it’s paramount that I consistently refine and improve my skills through ongoing, professional
                    development. Only then can I deliver authentic value, to bring a rewarding customer experience and huge corporate profits.
                </p>
            </div>
        </div>
    );
}

export default CompetitiveSectionBlock;
