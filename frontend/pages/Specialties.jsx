import React, { useEffect } from "react";

import ThesisBlock from "../template-parts/blocks/link-blocks/ThesisLinkBlock";
import UXDesignSectionBlock from "../template-parts/blocks/section-blocks/UXDesignSectionBlock";
import ArtificialIntelligenceSectionBlock from "../template-parts/blocks/section-blocks/ArtificialIntelligenceSectionBlock";
import ComputerVisionSectionBlock from "../template-parts/blocks/section-blocks/ComputerVisionSectionBlock";

function Specialties() {

    useEffect(() => {
        document.title = "Specialties | Chris Centrella";
    }, []);

    return (
        <>
            <p className="section-title zero-margin">Specialties</p>
            <UXDesignSectionBlock />
            <ArtificialIntelligenceSectionBlock />
            <ComputerVisionSectionBlock />
            <ThesisBlock />
        </>
    );
}

export default Specialties;
