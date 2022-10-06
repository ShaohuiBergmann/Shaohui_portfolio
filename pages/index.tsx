import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import { Experience, PageInfo, Project, Skill, Social } from "../typing";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchExperiences } from "../utils/fetchExperiences";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchSocials } from "../utils/fetchSocials";
import { fetchProjects } from "../utils/fetchProjects";

type Props = {
    pageInfo: PageInfo;
    experiences: Experience[];
    skills: Skill[];
    projects: Project[];
    socials: Social[];
};
const Home = ({ pageInfo, experiences, skills, projects, socials }: Props) => {
    return (
        <div className="bg-[rgb(1,132,127)]  h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[rgb(249,210,228)]">
            <Head>
                <title>Shaohui's Portfolio</title>
            </Head>
            <Header socials={socials} />
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

export const getStaticProps: GetStaticProps<Props> = async () => {
    const pageInfo: PageInfo = await fetchPageInfo();
    const experiences: Experience[] = await fetchExperiences();
    const skills: Skill[] = await fetchSkills();
    const socials: Social[] = await fetchSocials();
    const projects: Project[] = await fetchProjects();
    return {
        props: {
            pageInfo,
            experiences,
            skills,
            projects,
            socials,
        },

        //Next.js will attempt to re-generate the page
        //when a request comes in
        // at most once every 10 seconds
        revalidate: 10,
    };
};
