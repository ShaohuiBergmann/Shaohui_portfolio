import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typing";
import { urlFor } from "../sanity";

type Props = {
    projects: Project[];
};

function Projects({ projects }: Props) {
    return (
        <div className="h-screen relative flex  overflow-hidden flex-col text-left md:flex-row mx-w-full justify-evenly mx-auto items-center z-0 ">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-[rgb(249,210,228)]/70 text-2xl">
                Projects
            </h3>
            <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[rgb(249,210,228)]  text-[rgb(249,210,228)] ">
                {projects?.reverse().map((project, i) => (
                    <div
                        key={project?._id}
                        className="w-screen flex-shrink-0 snap-center flex flex-col space-y-3 items-center justify-center p-20 md:p-44 h-screen"
                    >
                        <motion.img
                            className="mt-20 h-[300px] w-[300px] object-cover md:h-[600px] md:w-[600px] md:mt-0 "
                            initial={{
                                y: -300,
                            }}
                            transition={{
                                duration: 1.2,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                            }}
                            src={urlFor(project?.image).url()}
                        />
                        <div className="text-white space-y-10 px-0 md:px-10 max-w-6xl">
                            <h4 className="m-3 text-xl font-semibold text-center md:text-4xl">
                                <span className="m-3 ">
                                    Case Study {i + 1} of {projects.length}:{" "}
                                </span>
                                <a
                                    href={project?.linkToBuild}
                                    className="underline decoration-[rgb(249,210,228)]"
                                >
                                    {" "}
                                    {project?.title}
                                </a>
                            </h4>
                            <div className="flex flex-wrap max-h-24 overflow-y-scroll items-center space-y-1 space-x-2 justify-center md:overflow-y-hidden">
                                {project?.technologies.map((technology) => (
                                    <img
                                        className="h-10 w-10 object-cover "
                                        key={technology._id}
                                        src={urlFor(technology.image).url()}
                                        alt={technology?.title}
                                    />
                                ))}
                            </div>

                            <p className="text-lx max-h-48 overflow-y-scroll text-center  md:text-left md:overflow-y-hidden md:text-2lg">
                                {project?.summary}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="w-full absolute top-[30%] bg-[rgb(249,210,228)]/60 left-0 h-[500px] -skew-y-12"></div>
        </div>
    );
}

export default Projects;
