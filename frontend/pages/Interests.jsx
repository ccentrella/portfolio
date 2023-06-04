import React, { useEffect } from "react";

import BlogBlock from "../template-parts/blocks/link-blocks/BlogLinkBlock";
import PhotosLinkBlock from "../template-parts/blocks/link-blocks/PhotosLinkBlock";
import GuitarBlogSectionBlocks from "../template-parts/blocks/section-blocks/GuitarBlogSectionBlocks";
import PhotographySectionBlock from "../template-parts/blocks/section-blocks/PhotographySectionBlock";

function Interests() {

    useEffect(() => {
        document.title = "Interests | Chris Centrella";
    }, []);

    return (
        <>
            <p className="section-title zero-margin">Interests</p>
            <GuitarBlogSectionBlocks />
            <BlogBlock />
            <PhotographySectionBlock />
            <PhotosLinkBlock />
        </>
    );
}

export default Interests;
