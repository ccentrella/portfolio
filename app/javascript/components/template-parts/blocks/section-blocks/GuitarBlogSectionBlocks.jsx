import React from "react";

function GuitarBlogSectionBlocks({ src, alt, color }) {
    return (
        <div className="section-block transparent">
            <div className="section-block-content backdrop flex-col">
                <h2 className="button-label">Guitar</h2>
                <p>The past couple years, I’ve been trying to pick up playing guitar, especially for worship. Picking up how to play a musical instrument can be a lot of work, but I’m SLOWLY getting there with a lot of practice.</p>
            </div>
            <div className="section-block-content backdrop flex-col">
                <h2 className="button-label">Personal Blog</h2>
                <p>My faith life is important to me and I love to write about how to find God amid the twists and turns of life, and so others might know more about Him.</p>
            </div>
        </div>
    );
}

export default GuitarBlogSectionBlocks;
