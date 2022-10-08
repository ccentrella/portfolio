import React from 'react'

function Footer() {
  return (
    <footer>
        <section className="footer-top">
            <h2 className='logo'><a href="/">Chris Centrella</a></h2>
        </section>
        <section className="footer-main">
            <div className="footer-section">
                <h4 className="footer-heading">About Me</h4>
                <hr className="footer-heading-decorator" />

                <p><a href="/" className="footer-link">Home</a></p>
                <p><a href="/about" className="footer-link">Profile</a></p>
            </div>
            <div className="footer-section">
                <h4 className="footer-heading">Work Experience</h4>
                <hr className="footer-heading-decorator" />
                
                <p><a href="/assets/resume-online.pdf" target="_blank" className="footer-link">Resume</a></p>
                <p><a href="https://github.com/ccentrella" target="_blank" className="footer-link">GitHub</a></p>
                <p><a href="https://linkedin.com/in/ccentrella" target="_blank" className="footer-link">LinkedIn</a></p>
            </div>
            <div className="footer-section">
                <h4 className="footer-heading">Content</h4>
                <hr className="footer-heading-decorator" />

                <p><a href="/blog" className="footer-link">Blog</a></p>
                <p><a href="https://lightroom.adobe.com/gallery/35c62e7ff3ce476f9ae5b07994eb6f15" target="_blank" className="footer-link">Photos</a></p>
            </div>
        </section>
        <section className="footer-bottom">
            <p className="copyright">Proudly built with <i className="heart"></i>. &copy; 2021 – 2022 Christopher Michael Centrella.
                All rights reserved.</p>
        </section>
    </footer>
  )
}

export default Footer