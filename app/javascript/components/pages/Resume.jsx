import React, { useEffect } from "react";

import Introduction from "../template-parts/resume/Introduction";
import SpecialtiesAndSkills from "../template-parts/resume/SpecialtiesAndSkills";
import TechnicalKnowledge from "../template-parts/resume/TechnicalKnowledge";
import Education from "../template-parts/resume/Education";
import WorkExperience from "../template-parts/resume/WorkExperience";
import ProjectExperience from "../template-parts/resume/ProjectExperience";

function Resume() {

    useEffect(() => {
        document.title = "Resume | Chris Centrella";
    }, []);

    return (
        <article className="resume">
            <Introduction />
            <SpecialtiesAndSkills />
            <WorkExperience />
            <ProjectExperience />
            <TechnicalKnowledge />
            <Education />
        </article>
    );
}

export default Resume;
