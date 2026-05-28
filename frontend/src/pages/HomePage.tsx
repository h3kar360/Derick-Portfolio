import React from "react";
import Introduction from "../components/HomePage/Introduction";
import Skills from "../components/HomePage/Skills";
import Projects from "../components/HomePage/Projects";
import Experience from "../components/HomePage/Experience";
import Contacts from "../components/HomePage/Contacts";

const HomePage = () => {
    return (
        <section>
            <Introduction />
            <Skills />
            <Projects />
            <Experience />
            <Contacts />
        </section>
    );
};

export default HomePage;
