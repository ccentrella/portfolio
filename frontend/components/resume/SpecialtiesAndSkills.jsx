import React from "react";
import { Link } from "react-router-dom";

function SpecialtiesAndSkills() {
    return (
        <section>
            <p className="section-title">Specialties And Skills</p>
            <div className="container">
                <p>Dedication to professional growth, Collaborative team player, Effective Communication, Analysis & Problem-solving, Agile Methodology, Full Stack Web Development, iOS Mobile App Development, Machine Learning, Computer Vision, UX Design & Prototyping, AWS Certified</p>
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
