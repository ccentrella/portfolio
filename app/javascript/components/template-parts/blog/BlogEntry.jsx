import React from "react";
import { Link } from "react-router-dom";

function BlogEntry({post}) {
    return (
        <article className="post-item">
            <h2 className="post-item-title">
                <Link to={"/blog/" + post.slug}>{post.title}</Link>
            </h2>
            <p className="post-item-date">{post.created_at}</p>
            {post.description && <p class="post-item-description">{post.description}</p>}
        </article>
    );
}

export default BlogEntry;
