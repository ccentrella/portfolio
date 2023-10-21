import React from "react";
import LinkBlock from "./LinkBlock";
import ThesisIcon from "../../../../../assets/images/icons/article.svg";

function ThesisLinkBlock() {

    const links = [{
        linkDescription: "Read Now",
        linkPath: "/assets/thesis.pdf",
        isExternal: true
    }];

    return (
        <LinkBlock
            title="Senior Thesis"
            icon={ThesisIcon}
            links={links}
        />
    );
}

export default ThesisLinkBlock;
