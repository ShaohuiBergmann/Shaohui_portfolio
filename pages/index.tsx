import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
const Home: NextPage = () => {
    return (
        <div className="bg-[rgb(1,132,127)]  h-screen snap-y snap-mandatory overflow-scroll z-0 ">
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
            <section id="skills">
                <Skills />
            </section>
            {/*Projects*/}
            {/*Contact*/}
        </div>
    );
};

export default Home;
