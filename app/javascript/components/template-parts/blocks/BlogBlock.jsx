import React from "react";
import Block from "./Block";
import BlogIcon from "../../../../assets/images/icons/article.svg";

function BlogBlock() {
    return (
        <Block
            title="{Latest Blog Post}"
            icon={BlogIcon}
            links={[
                [
                    (linkDescription = "View Article"),
                    (linkPath = "/blog"),
                    (isExternal = false),
                ],
                [
                    (linkDescription = "Blog Homepage"),
                    (linkPath = "/blog"),
                    (isExternal = false),
                ],
            ]}
        />
    );
}

export default BlogBlock;
