import React from "react";
import ArtisticSectionBlock from "../template-parts/blocks/section-blocks/ArtisticSectionBlock";
import CompetitiveSectionBlock from "../template-parts/blocks/section-blocks/CompetitiveSectionBlock";
import DrivenSectionBlock from "../template-parts/blocks/section-blocks/DrivenSectionBlock";

function Highlights() {
    return (
        <>
            <p className="section-title zero-margin">Highlights</p>
            <CompetitiveSectionBlock />
            <ArtisticSectionBlock />
            <DrivenSectionBlock />
        </>
    );
}

export default Highlights;
