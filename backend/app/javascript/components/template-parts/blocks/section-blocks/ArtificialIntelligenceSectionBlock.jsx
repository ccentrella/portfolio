import React from "react";
import ImageBlock from "../ImageBlock";

function ArtificialIntelligenceSectionBlock({ src, alt, color }) {
    return (
        <div className="section-block">
            <div className="section-block-content flex-col">
                <h2 className="button-label">Artificial Intelligence</h2>
                <p>
                    We live in a changing world, a world with an increasing amount of uncertainty, of complexity, and of misinformation. These factors require new technologies to bring corporate and consumer value. My interest in utilizing the latest
                    technologies and the most cutting-edge innovation demands that I become acquainted with the latest and greatest invention of human history.
                </p>
                <p>
                    I first entered the AI field during the summer of 2021, where I spent several months learning the fundamentals of artificial intelligence; things like training, loss, optimization and backpropagation. I learned these concepts with
                    a specific focus on their application in computer vision, one of my favorite specialties.
                </p>
            </div>
            <div className="section-block-image flex-col light-blue">
                <ImageBlock src="/assets/specialties-ai.png" alt="artificial intelligence image" color="#A5CBFA" />
            </div>
        </div>
    );
}

export default ArtificialIntelligenceSectionBlock;
