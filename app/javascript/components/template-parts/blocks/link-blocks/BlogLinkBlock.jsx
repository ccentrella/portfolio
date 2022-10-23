import React from "react";
import LinkBlock from "./LinkBlock";
import BlogIcon from "../../../../../assets/images/icons/article.svg";

function BlogLinkBlock() {
    return (
        <LinkBlock
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

export default BlogLinkBlock;
