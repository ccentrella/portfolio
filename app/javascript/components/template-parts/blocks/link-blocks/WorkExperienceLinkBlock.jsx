import React from "react";
import LinkBlock from "./LinkBlock";
import ResumeIcon from "../../../../../assets/images/icons/paper.svg";

function WorkExperienceLinkBlock() {
    return (
        <LinkBlock
            title="Work Experience"
            icon={ResumeIcon}
            links={[
                [
                    (linkDescription = "View Resume"),
                    (linkPath = "/resume"),
                    (isExternal = false),
                ],
                [
                    (linkDescription = "My GitHub"),
                    (linkPath = "https://github.com/ccentrella"),
                    (isExternal = true),
                ],
            ]}
        />
    );
}

export default WorkExperienceLinkBlock;
