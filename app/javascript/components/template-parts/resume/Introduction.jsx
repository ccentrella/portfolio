import React from "react";
import { Link } from "react-router-dom";

function Introduction() {
    return (
        <section>
            <p className="section-title">Resume</p>
            <div className="container">
                <p className="resume-name">Christopher Centrella: Software Engineer</p>
                <p className="resume-location">Lives In: Nashville, TN</p>
                <div className="resume-buttons">
                    <Link className="resume-link" to="/">
                        Homepage
                    </Link>
                    <a className="resume-link" target="_blank" href="https://github.com/ccentrella">
                        Find Me on GitHub
                    </a>
                    <a className="resume-link" target="_blank" href="https://linkedin.com/in/ccentrella">
                        View LinkedIn
                    </a>
                    <Link className="resume-link" to="/contact">
                        Contact Me
                    </Link>
                </div>
                <p>Committed to <span className='resume-emphasis'>continuous improvement</span>, effective <span className='resume-emphasis'>team collaboration</span>, and <span className='resume-emphasis'>user-centered</span> design. Outstanding ability for <span className='resume-emphasis'>debugging</span>, <span className='resume-emphasis'>problem solving</span>, and discovering <span className='resume-emphasis'>edge cases</span>. Well-versed in <span className='resume-emphasis'>design patterns</span>, software <span className='resume-emphasis'>architecture</span>, and <span className='resume-emphasis'>cross-team</span> collaboration.</p>
            </div>
        </section>
    );
}

export default Introduction;
