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
                <p>
                    I'm a Christian who believes that Jesus wants each of us to have an
                    intimate relationship with Him, and that all might read the Word of
                    God "as one having authority and not as the scribes." (Matthew
                    7:28-9). Rather than repeating what is currently popular in
                    Christianity or the Church, I'm absolutely convinced that Jesus gave
                    us His Word so that each of us might not only apply it to our lives
                    but comprehend amid our own limitations the mysteries of God, which He
                    has revealed to the little (Matthew 11:25-6).
                </p>
                <p>
                    I write for this purpose: That all men and women might see the mighty
                    works of God in our time through the eyes of faith, and that one day
                    everyone will experience the glory of God, alive in the Church!
                </p>
            </div>
        </div>
    );
}

export default GuitarBlogSectionBlocks;
