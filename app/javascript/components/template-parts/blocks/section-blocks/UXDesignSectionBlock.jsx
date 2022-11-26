import React from "react";
import ImageBlock from "../ImageBlock";

function UXDesignSectionBlock({ src, alt, color }) {
    return (
        <div className="section-block transparent">
            <div className="section-block-image backdrop flex-col">
                <ImageBlock src="/assets/specialties-ux.png" alt="fibonacci program" color="#B9C4D1" />
            </div>
            <div className="section-block-content backdrop flex-col">
                <h2 className="button-label">UX Design</h2>
                <p>One of my favorite specialties in software engineering is UX design, also known as User Experience Design. Creating user interfaces has always fascinated me, and I’ve always wanted to build rich, modern user interfaces. Since I began programming, I’ve written over 10+ apps, most of them using Windows Presentation Foundation or WPF, which is known for its ability to create rich, user-oriented interfaces, with more flexibility than CSS.</p>
                <p>More recently, I took it upon myself to take several classes on LinkedIn on graphic design, so that I would have the foundation to create refined, modern, user experiences. Since then, I’ve been continually applying my skills in a variety of ways, one of which is this portfolio website. I designed this entire website from the ground up, prototyping all of the designs in Adobe XD and then implementing them with HTML and CSS.</p>
            </div>
        </div>
    );
}

export default UXDesignSectionBlock;
