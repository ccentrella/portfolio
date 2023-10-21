import React from "react";
import LinkBlock from "./LinkBlock";
import ResumeIcon from "../../../../../assets/images/icons/paper.svg";

function WorkExperienceLinkBlock() {

    const links = [
        {
            linkDescription: "View Resume",
            linkPath: "/resume",
            isExternal: false
        },
        {
            linkDescription: "My GitHub",
            linkPath: "https://github.com/ccentrella",
            isExternal: true
        }
    ];

    return (
        <LinkBlock
            title="Work Experience"
            icon={ResumeIcon}
            links={links}
        />
    );
}

export default WorkExperienceLinkBlock;
