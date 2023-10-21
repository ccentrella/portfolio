import React, {useEffect, useState} from "react";
import LinkBlock from "./LinkBlock";
import BlogIcon from "../../../../../assets/images/icons/article.svg";

function BlogLinkBlock() {
    const [latestPost, setLatestPost] = useState({value: 0, title: "", link: ""});

    useEffect(() => {
        fetch("/api/v1/blog/latest_article")
            .then((response) => response.json())
            .then(
                (post) => {
                    setLatestPost({...latestPost, title: post.title, link: "/blog/" + post.slug});
                },
            );
    }, [latestPost.value]);

    const links = [
        {
            linkDescription: "View Article",
            linkPath: latestPost.link,
            isExternal: false
        },
        {
            linkDescription: "Blog Homepage",
            linkPath: "/blog",
            isExternal: false
        }
    ];

    return (
        <LinkBlock
            title={"Latest Post: " + latestPost.title}
            icon={BlogIcon}
            links={links}
            expandIcon={true}
        />
    );
}

export default BlogLinkBlock;
