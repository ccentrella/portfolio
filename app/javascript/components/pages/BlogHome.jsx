import React from "react";
import { useState, useEffect } from "react";

import BlogEntry from "../template-parts/blog/BlogEntry";

function BlogHome() {
    const [loaded, setLoaded] = useState(false);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("/api/v1/blog/")
            .then((response) => response.json())
            .then(
                (posts) => {
                    setPosts(posts);
                    setLoaded(true);
                },
            );
    }, [loaded]);

    return (
        <>
            <main className="container">
                <h1>Articles</h1>
                {Array.isArray(posts) && posts.map((post) => (
                    <BlogEntry post={post} />
                    ))}
            </main>
            {/* <Subscribe /> */}
        </>
    );
}

export default BlogHome;
