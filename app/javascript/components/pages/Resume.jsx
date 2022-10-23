import React from "react";

import Introduction from "../template-parts/resume/Introduction";
import Summary from "../template-parts/resume/Summary";
import SpecialtiesAndSkills from "../template-parts/resume/SpecialtiesAndSkills";
import TechnicalKnowledge from "../template-parts/resume/TechnicalKnowledge";
import Education from "../template-parts/resume/Education";
import CoursesAndTraining from "../template-parts/resume/CoursesAndTraining";
import WorkExperience from "../template-parts/resume/WorkExperience";
import ProjectExperience from "../template-parts/resume/ProjectExperience";
import VolunteerExperience from "../template-parts/resume/VolunteerExperience";

function Resume() {
    return (
        <div>
            <Introduction />
            <article className="resume">
                <Summary />
                <SpecialtiesAndSkills />
                <TechnicalKnowledge />
                <Education />
                <CoursesAndTraining />
                <WorkExperience />
                <ProjectExperience />
                <VolunteerExperience />
            </article>
        </div>
    );
}

export default Resume;
