import React, { useState, useEffect } from "react";
import LinkBlock from "./LinkBlock";
import BlogIcon from "../../../../../assets/images/icons/article.svg";

function BlogLinkBlock() {
    const [latestPost, setLatestPost] = useState({ value: 0, title: "", link: "" });

    useEffect(() => {
        fetch("/api/v1/blog/latest_article")
            .then((response) => response.json())
            .then(
                (post) => {
                    console.log(post);
                    setLatestPost({ ...latestPost, title: post.title, link: "/blog/" + post.slug });
                },
            );
    }, [latestPost.value]);

    return (
        <LinkBlock
            title={latestPost.title}
            icon={BlogIcon}
            links={[
                [(linkDescription = "View Article"), (linkPath = latestPost.link), (isExternal = false)],
                [(linkDescription = "Blog Homepage"), (linkPath = "/blog"), (isExternal = false)],
            ]}
        />
    );
}

export default BlogLinkBlock;
