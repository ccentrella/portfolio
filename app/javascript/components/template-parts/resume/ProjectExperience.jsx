import React from 'react';

function ProjectExperience() {
    return (
        <section>
            <p className="section-title">Project Related Experience</p>
            <div className="container">
                <div>
                    <p className="resume-item-heading">Coding Goals iOS App</p>
                    <p className="resume-item-subheading">2023 — Present</p>

                    <div className='resume-list'>
                        <p><span className='resume-emphasis'>&gt;</span> Create coding goals iOS app to encourage the software engineers of tomorrow</p>
                        <p><span className='resume-emphasis'>&gt;</span> Refined, intuitive, native interface</p>
                        <p><span className='resume-emphasis'>&gt;</span> Completed core app functionality: create, view, edit and delete goals using an intuitive and friendly interface</p>
                        <p><span className='resume-emphasis'>&gt;</span> Prototype entire app in Sketch using Apple’s built-in library</p>
                        <p><span className='resume-emphasis'>&gt;</span> Use SF Symbols to find appropriate icons</p>
                        <p><span className='resume-emphasis'>&gt;</span> Implement using SwiftUI with Apple’s latest APIs</p>
                        <p><span className='resume-emphasis'>&gt;</span> Continuously refactor and improve code</p>
                        <p><span className='resume-emphasis'>&gt;</span> Create logo using Adobe Illustrator</p>
                    </div>

                    <p><span className='resume-emphasis'>Technologies Used:</span> Swift, SwiftUI, Sketch, Adobe Illustrator, SF Symbols, Git</p>
                </div>
                <div>
                    <p className="resume-item-heading">Personal Portfolio Website</p>
                    <p className="resume-item-subheading">
                        2021 — Present
                        <br />
                        https://chriscentrella.com
                    </p>

                    <div className="resume-list">
                        <p><span className='resume-emphasis'>&gt;</span> Built completely responsive, mobile-friendly portfolio website</p>
                        <p><span className='resume-emphasis'>&gt;</span> Created blog using modern interface and interactive admin panel</p>
                        <p><span className='resume-emphasis'>&gt;</span> Converted entire public-facing website to SPA app using React</p>
                        <p><span className='resume-emphasis'>&gt;</span> Refactoring admin code to fully separate frontend and backend</p>
                        <p><span className='resume-emphasis'>&gt;</span> Upgrading frontend codebase to NextJS</p>
                    </div>

                    <p><span className='resume-emphasis'>Technologies Used:</span> React, Ruby on Rails, PostgreSQL, HTML/CSS/ SCSS, Adobe Illustrator, Adobe XD, Git</p>
                </div>    
            </div>
        </section>
    );
}

export default ProjectExperience;
