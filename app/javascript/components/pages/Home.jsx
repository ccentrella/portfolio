import React from "react";

import Hero from "../template-parts/Hero";
import Highlights from "./Highlights";
import Specialties from "./Specialties";
import Interests from "./Interests";
import WorkExperienceBlock from "../template-parts/blocks/WorkExperienceBlock";

function Home() {
    return (
        <article className="home">
            <section>
                <Hero />
                <div className="container">
                    <p className="large">
                        I’m a creative and hard-working graduate in Computer
                        Science with software engineering and app development
                        experience using a range of technologies and programming
                        languages. I’ve been programming since a young age, and
                        completed over ten projects since 2015, including
                        several educational apps and a learning management
                        system. I’m especially passionate about computer vision,
                        AI, machine learning, and UX engineering, and committed
                        to using industry standards and best practices.
                    </p>
                </div>
                <WorkExperienceBlock />
            </section>
            <section>
                <Highlights />
            </section>
            <section>
                <Specialties />
            </section>
            <section>
                <Interests />
            </section>
        </article>
    );
}

export default Home;
