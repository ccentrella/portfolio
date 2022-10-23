import React from "react";
import { useState, useEffect } from "react";

import BlogEntry from "../template-parts/blog/BlogEntry";

function BlogHome() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch("/blog")
            .then((response) => response.json())
            .then((data) => {
                setPosts(data);
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <>
            <main className="container">
                <h1>Articles</h1>
                {posts.map((post) => (
                    <BlogEntry post={post} />
                ))}
            </main>
            {/* <Subscribe /> */}
        </>
    );
}

export default BlogHome;
