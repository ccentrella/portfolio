import React from "react";
import Block from "./Block";
import ThesisIcon from "../../../../assets/images/icons/article.svg";

function ThesisBlock() {
    return (
        <Block
            title="Senior Thesis"
            icon={ThesisIcon}
            links={[
                [
                    (linkDescription = "Read Now"),
                    (linkPath = "/assets/thesis.pdf"),
                    (isExternal = true),
                ],
            ]}
        />
    );
}

export default ThesisBlock;
