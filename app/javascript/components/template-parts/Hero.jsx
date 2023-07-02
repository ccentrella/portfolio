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
                                Full-Stack
                                <br />
                                <span className="medium">Software Engineer</span>
                            </h2>
                            <a id="hero-pointer"></a>
                        </div>
                    </div>
                </div>
                <div id="hero-about">
                    <p>I’m a capable full stack engineer, committed to continuously improve my skills, collaborate effectively on a team, and create user-centered designs which solve real-world problems. I have an outstanding ability for debugging, problem solving, and discovering edge cases. Well-versed in design patterns, software architecture, and cross-team collaboration.</p>
                    <p>Programming since I was fourteen, I have an extensive knowledge of frontend and backend across several programming languages including React, Ruby, Swift, and .NET. Most importantly, I’m obsessed with the user: Creating software which solves user’s pain points and provides a seamless, intuitive, and beautiful user experience.</p>
                </div>
            </div>
            <hr id="hero-bar" />
        </>
    );
}

export default Hero;
