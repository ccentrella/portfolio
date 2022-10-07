import React from 'react';

function Hero() {
  return (
    <>
        <img className="profile-image" src="/assets/favicon.png" alt='profile image' />
        <h1 id="hero-logo">Christopher Centrella</h1>
        <div id="hero-bottom">
            <h2 id="hero-tagline">Junior<br/><span className="medium">Software Engineer</span></h2>
            <div id="hero-bar"></div>
        </div>
    </>
  )
}

export default Hero;