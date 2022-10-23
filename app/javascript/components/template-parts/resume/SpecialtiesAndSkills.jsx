import React from "react";
import { Link } from "react-router-dom";

function SpecialtiesAndSkills() {
    return (
        <section>
            <p className="section-title">Specialties And Skills</p>
            <div className="container">
                <p>
                    Software Engineering, App Development, Web Development, Machine Learning, Computer Vision, UX/UI Design & Prototyping, Object Oriented Programming, Agile Methodology, Project Management, Graphic Design, Analysis & Problem-solving,
                    Time Management, Teamwork & Collaboration, Effective Communication, Technology Early Adopter, Self-starter with a dedication to professional growth
                </p>
                <br/>
                <div className="button-fixed-container top bottom">
                    <Link className="button-fixed" to="/specialties">
                        View Specialties
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default SpecialtiesAndSkills;
