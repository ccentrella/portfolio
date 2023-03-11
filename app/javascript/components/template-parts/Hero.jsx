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
                    <p>I'm a capable Software Engineer II committed to creating a quality product, continuously improving my skills, and effectively collaborating on a team.</p>
                    <p>Writing my first line of code when I was fourteen, I've created numerous solutions across domains, including iOS mobile app development using Apple's latest APIs, and full-stack web development using React with Ruby on Rails.</p>
                    <p>Most importantly, I'm committed to writing clean, quality code and following best software patterns and practices.</p>
                </div>
            </div>
            <hr id="hero-bar" />
        </>
    );
}

export default Hero;
