import React from 'react';

function ProjectExperience() {
    return (
        <section>
            <p className="section-title">Project Related Experience</p>
            <div className="container">
                <div>
                    <p className="resume-item-heading">Coding Goals iOS App</p>
                    <p className="resume-item-subheading">2023 — Present<br/>
                    <a href="https://testflight.apple.com/join/dvjRr2ya" target="_blank">https://testflight.apple.com/join/dvjRr2ya</a>
                    </p>

                    <div className='resume-list'>
                        <p><span className='resume-emphasis'>&gt;</span> Create iOS app to encourage software engineers of tomorrow</p>
                        <p><span className='resume-emphasis'>&gt;</span> Implement using SwiftUI with Apple’s latest APIs</p>
                        <p><span className='resume-emphasis'>&gt;</span> Continuously refactor and improve code</p>
                        <p><span className='resume-emphasis'>&gt;</span> Refined, intuitive, fully native interface</p>
                        <p><span className='resume-emphasis'>&gt;</span> Prototype entire app in Sketch using Apple’s built-in library</p>
                        <p><span className='resume-emphasis'>&gt;</span> Use SF Symbols to find appropriate icons</p>
                        <p><span className='resume-emphasis'>&gt;</span> Create logo using Adobe Illustrator</p>
                    </div>

                    <p><span className='resume-emphasis'>Technologies Used:</span> Swift, SwiftUI, Sketch, Adobe Illustrator, SF Symbols, Git</p>
                </div>

                <div>
                    <p className="resume-item-heading">Personal Portfolio Website</p>
                    <p className="resume-item-subheading">
                        2021 — Present (<a href="https://chriscentrella.com" target="_blank">https://chriscentrella.com</a>)
                        <br />
                        <a href="https://github.com/ccentrella/portfolio" target="_blank">https://github.com/ccentrella/portfolio</a>
                    </p>

                    <div className="resume-list">
                        <p><span className='resume-emphasis'>&gt;</span> Build responsive portfolio website using React and Ruby on Rails</p>
                        <p><span className='resume-emphasis'>&gt;</span> Responsible for end-to-end design and implementation</p>
                        <p><span className='resume-emphasis'>&gt;</span> Currently refactoring website to follow separation of concerns</p>
                    </div>

                    <p><span className='resume-emphasis'>Technologies Used:</span> React, Ruby on Rails, PostgreSQL, HTML/CSS/ SCSS, Adobe Illustrator, Adobe XD, Git</p>
                </div>    
            </div>
        </section>
    );
}

export default ProjectExperience;
