import React from 'react';

import { useState, useEffect } from 'react';
import Subscribe from '../template-parts/Subscribe';
import BlogEntry from '../template-parts/blog/BlogEntry';

function BlogHome() {
    const [loaded, setLoaded] = useState(false);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        document.title = "Welcome | Chris's Blog";
    }, []);

    useEffect(() => {
        fetch('/api/v1/blog/')
            .then((response) => response.json())
            .then((posts) => {
                setPosts(posts);
                setLoaded(true);
            });
    }, [loaded]);

    return (
        <>
            <main className="container">
                <h1>Blog</h1>
                <p>
                    I'm a Christian who believes that Jesus wants each of us to have an
                    intimate relationship with Him, and that all might read the Word of
                    God "as one having authority and not as the scribes." (Matthew
                    7:28-9). Rather than repeating what is currently popular in
                    Christianity or the Church, I'm absolutely convinced that Jesus gave
                    us His Word so that each of us might not only apply it to our lives
                    but comprehend amid our own limitations the mysteries of God, which He
                    has revealed to the little (Matthew 11:25-6).
                </p>
                <p>
                    I write for this purpose: That all men and women might see the mighty
                    works of God in our time through the eyes of faith, and that one day
                    everyone will experience the glory of God, alive in the Church!
                </p>
                {Array.isArray(posts) &&
                    posts.map((post) => <BlogEntry post={post} key={post.slug} />)}
            </main>
            <Subscribe />
        </>
    );
}

export default BlogHome;
