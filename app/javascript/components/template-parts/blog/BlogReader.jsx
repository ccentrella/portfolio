import LoadingScreen from 'javascript/components/LoadingScreen';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Subscribe from '../Subscribe';

function BlogReader() {
    const [loaded, setLoaded] = useState(false);
    const [post, setPost] = useState();
    const params = useParams();
    const parse = require('html-react-parser');

    useEffect(() => {
        fetch('/api/v1/blog/' + params.slug)
            .then((response) => response.json())
            .then((post) => {
                console.log(post);
                setPost(post);
                document.title = post.title + ' | Chris Centrella';
                setLoaded(true);
            });
    }, [loaded]);

    if (!loaded) {
        return (
            <>
                <div className="container">
                    <h1>Loading...</h1>
                </div>
                <LoadingScreen />
            </>
        );
    } else if (!post) {
        document.title = "Page Doesn't Exist | Chris Centrella";
        return (
            <div className="container">
                <h1>This post doesn't exist or has been removed.</h1>
                <div className="button-fixed-container thin">
                    <Link className="button-fixed" to="/">
                        View Homepage
                    </Link>
                    <Link className="button-fixed" to="/blog">
                        Blog Home
                    </Link>
                </div>
            </div>
        );
    }
    return (
        <>
            <article className="post">
                <section className="post-header">
                    <div className="post-header-top">
                        <Link
                            className="posts-back-icon"
                            to="/blog"
                            title="View All Articles">
                            <i className="icon left-arrow medium"></i>
                        </Link>
                        {/* <% if user_signed_in? %>
                <%= link_to "<i className='icon pencil large'></i>".html_safe, edit_post_path(@post), class: "post-edit-icon", title: "Edit Post" %>
            <% end %> */}
                        <h1>{post.title}</h1>
                    </div>
                    <div className="post-header-bottom">
                        <div className="post-details">
                            <p>
                                <i className="calendar large"></i> {post.date}{' '}
                            </p>
                            <p>
                                <i className="clock large"></i> {post.time}{' '}
                            </p>
                        </div>
                    </div>
                    <div className="post-header-additional container">
                        <div className="center">
                            <p className="post-author button-label">
                                <i className="person large"></i> {post.author}{' '}
                            </p>
                        </div>
                        <p className="post-description">{post.description}</p>
                    </div>
                </section>
                <section className="post-content container">
                    {post.content.body && parse(post.content.body)}
                </section>
            </article>
            <Subscribe />
        </>
    );
}

export default BlogReader;