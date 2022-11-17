import React, { useEffect } from "react";

import Hero from "../template-parts/Hero";
import Highlights from "./Highlights";
import Specialties from "./Specialties";
import Interests from "./Interests";
import WorkExperienceLinkBlock from "../template-parts/blocks/link-blocks/WorkExperienceLinkBlock";

function Home() {
    useEffect(() => {
        document.title = "Welcome to Chris Centrella's Portfolio";
    }, []);

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
