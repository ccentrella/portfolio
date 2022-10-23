import React from "react";

import Hero from "../template-parts/Hero";
import Highlights from "./Highlights";
import Specialties from "./Specialties";
import Interests from "./Interests";
import WorkExperienceLinkBlock from "../template-parts/blocks/link-blocks/WorkExperienceLinkBlock";

function Home() {
    return (
        <article className="home">
            <section>
                <Hero />
                <WorkExperienceLinkBlock />
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
