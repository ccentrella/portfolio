import React from "react";
import Block from "./Block";
import ResumeIcon from "../../../../assets/images/icons/paper.svg";

function WorkExperienceBlock() {
    return (
        <Block
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

export default WorkExperienceBlock;
