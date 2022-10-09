import React from "react";
import Block from "./Block";
import BlogIcon from "../../../../assets/images/icons/article.svg";

function ThesisBlock() {
    return (
        <Block
            title="{Latest Blog Post}"
            icon={BlogIcon}
            link_description="View Article"
            link_path="/blog"
            link_description_second="Blog Homepage"
            link_path_second="/blog"
        />
    );
}

export default ThesisBlock;
