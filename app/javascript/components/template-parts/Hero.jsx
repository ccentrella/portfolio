import React from "react";

function Hero() {
    return (
        <>
            <div id="hero">
                <div id="hero-primary">
                    <img id="hero-profile" src="/assets/favicon.png" alt="profile image" />
                    <div id="hero-logo">
                        <h1 id="hero-headline">Christopher Centrella</h1>
                        <div id="hero-bottom">
                            <h2 id="hero-tagline">
                                Full Stack
                                <br />
                                <span className="medium">Software Engineer</span>
                            </h2>
                            <a id="hero-pointer"></a>
                        </div>
                    </div>
                </div>
                <div id="hero-about">
                    <p>I’m a creative and hard-working graduate in Computer Science with software engineering and app development experience using a range of technologies and programming languages.</p>
                    <p>I’ve been programming since a young age, and completed over ten projects since 2015, including several educational apps and a learning management system.</p>
                    <p>I’m especially passionate about computer vision, AI, machine learning, and UX engineering, and committed to using industry standards and best practices.</p>
                </div>
            </div>
            <hr id="hero-bar" />
        </>
    );
}

export default Hero;
