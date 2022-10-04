import React from "react";
import { motion } from "framer-motion";

type Props = {};

function Projects({}: Props) {
    //for demon purpose
    const projects = [1, 2, 3, 4];
    return (
        <div className="h-screen relative flex  overflow-hidden flex-col text-left md:flex-row mx-w-full justify-evenly mx-auto items-center z-0 ">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-[rgb(249,210,228)]/70 text-2xl">
                Projects
            </h3>
            <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[rgb(249,210,228)]">
                {projects.map((project, i) => {
                    <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-3 items-center justify-center p-20 md:p-44 h-screen">
                        <motion.img
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
                        ></motion.img>
                        <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                            <h4 className="text-4xl font-semibold text-ccenter">
                                <span className="underline decoration-[rgb(249,210,228)]">
                                    Case Study {i + 1} of {projects.length}:{" "}
                                </span>
                                name{" "}
                            </h4>
                            <p className="text-lg text-center md:text-left">
                                projects summary
                            </p>
                        </div>
                    </div>;
                })}
            </div>
            <div className="w-full absolute top-[30%] bg-[rgb(249,210,228)]/60 left-0 h-[500px] -skew-y-12"></div>
        </div>
    );
}

export default Projects;
