import React from "react";
import ThesisBlock from "../template-parts/blocks/link-blocks/ThesisLinkBlock";
import UXEngineeringSectionBlock from "../template-parts/blocks/section-blocks/UXEngineeringSectionBlock";
import ArtificialIntelligenceSectionBlock from "../template-parts/blocks/section-blocks/ArtificialIntelligenceSectionBlock";
import ComputerVisionSectionBlock from "../template-parts/blocks/section-blocks/ComputerVisionSectionBlock";

function Specialties() {
    return (
        <>
            <p className="section-title zero-margin">Specialties</p>
            <UXEngineeringSectionBlock />
            <ArtificialIntelligenceSectionBlock />
            <ComputerVisionSectionBlock />
            <ThesisBlock />
        </>
    );
}

export default Specialties;
