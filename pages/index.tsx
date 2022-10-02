import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
const Home: NextPage = () => {
    return (
        <div className="bg-[rgb(1,132,127)]  h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 ">
            <Head>
                <title>Shaohui's Portfolio</title>
            </Head>
            <Header />
            {/*Hero*/}
            <section id="hero" className="snap-center">
                <Hero />
            </section>
            {/*About*/}
            <section id="about" className="snap-center">
                <About />
            </section>
            {/*Experience*/}
            <section id="experience" className="snap-center">
                <WorkExperience />
            </section>
            {/*Skills*/}
            <section id="skills" className="snap-start">
                <Skills />
            </section>
            {/*Projects*/}
            <section id="projects" className="snap-start">
                <Projects />
            </section>
            {/*Contact*/}
        <section id="contact" className="snap-start">
            <ContactMe />
        </section>
        </div>
    );
};

export default Home;
