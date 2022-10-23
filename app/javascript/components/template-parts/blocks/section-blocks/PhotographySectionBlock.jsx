import React from "react";

function PhotographySectionBlock({ src, alt, color }) {
    return (
        <div className="section-block transparent">
            <div className="section-block-content backdrop flex-col">
                <h2 className="button-label">Photography</h2>
                <p>Taking photos has been one of my favorite hobbies as early as my childhood. In a world full of pain and division, my mind is drawn to capture what’s truly beautiful. I especially love to take pictures of nature, because there is a sacredness and a beauty in the environment, unparalleled by human invention. For “the heavens proclaim the glory of God, and the firmament proclaims His handiwork.” (Psalm 19:1).</p>
            </div>
        </div>
    );
}

export default PhotographySectionBlock;
