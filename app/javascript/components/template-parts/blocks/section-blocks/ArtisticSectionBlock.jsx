import React from "react";
import ImageBlock from "../ImageBlock";

function ArtisticSectionBlock({ src, alt, color }) {
    return (
        <div className="section-block transparent">
            <div className="section-block-image backdrop flex-col">
                <ImageBlock src="/assets/specialties-ux.png" alt="fibonacci program" color="#B9C4D1" />
            </div>
            <div className="section-block-content flex-col zero-padding">
                <h2 className="button-label">Artistic</h2>
                <p className="large">
                    Nothing has more impact on human beings than the power of visuals. Our brains respond immediately to visuals, and visuals have a tremendous impact on how we perceive a product or service. This leads to one principle:
                </p>
                <h3>Art has the power to transform.</h3>
                <p className="large">
                    Art is transformative in so many ways, but it always involves an impact on the viewer. Whether it’s converting clicks into leads, retaining customer contracts, or generating positive feedback through intuitive design, at its core
                    art is about transforming the user experience and driving home a lasting impact. This resonates with me; visual design has impacted me in so many ways, and I’m so excited to drive the next generation of refined user experience
                    through the power of art.
                </p>
            </div>
        </div>
    );
}

export default ArtisticSectionBlock;
