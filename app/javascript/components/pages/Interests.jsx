import React from "react";

import BlogBlock from "../template-parts/blocks/link-blocks/BlogLinkBlock";
import GuitarBlogSectionBlocks from "../template-parts/blocks/section-blocks/GuitarBlogSectionBlocks";
import PhotographySectionBlock from "../template-parts/blocks/section-blocks/PhotographySectionBlock";

function Interests() {
    return (
        <>
            <p className="section-title zero-margin">Interests</p>
            <GuitarBlogSectionBlocks />
            <BlogBlock />
            <PhotographySectionBlock />
        </>
    );
}

export default Interests;
