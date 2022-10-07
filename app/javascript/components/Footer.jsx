import React from 'react'

function Footer() {
  return (
    <footer>
        <section class="footer-top">
            <h2 class='logo'><a href="/">Chris Centrella</a></h2>
        </section>
        <section class="footer-main">
            <div class="footer-section">
                <h4 class="footer-heading">About Me</h4>
                <hr class="footer-heading-decorator" />

                <p><a href="/" className="footer-link">Home</a></p>
                <p><a href="/about" className="footer-link">Profile</a></p>
            </div>
            <div class="footer-section">
                <h4 class="footer-heading">Work Experience</h4>
                <hr class="footer-heading-decorator" />
                
                <p><a href="/assets/resume-online.pdf" target="_blank" className="footer-link">Resume</a></p>
                <p><a href="https://github.com/ccentrella" target="_blank" className="footer-link">GitHub</a></p>
                <p><a href="https://linkedin.com/in/ccentrella" target="_blank" className="footer-link">LinkedIn</a></p>
            </div>
            <div class="footer-section">
                <h4 class="footer-heading">Content</h4>
                <hr class="footer-heading-decorator" />

                <p><a href="/blog" className="footer-link">Blog</a></p>
                <p><a href="https://lightroom.adobe.com/gallery/35c62e7ff3ce476f9ae5b07994eb6f15" target="_blank" className="footer-link">Photos</a></p>
            </div>
        </section>
        <section class="footer-bottom">
            <p class="copyright">Proudly built with <i class="heart"></i>. &copy; 2021 – 2022 Chris Centrella.
                All rights reserved.</p>
        </section>
    </footer>
  )
}

export default Footer