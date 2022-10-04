import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard"

type Props = {};

function WorkExperience({}: Props) {
    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            whileInView={{ opacity: 1 }}
            transition={{
                duration: 1.5,
            }}
            className="h-screen flex flex-col relative overflow-hidden text-left md:flex-row max-w-full px-10 justify-evenly items-center"
        >
            <h3 className="absolute top-24 uppercase tracking-[20px] text-[rgb(249,210,228)]/70 text-2xl">
                Experience
            </h3>
            <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[rgb(249,210,228)]">
                <ExperienceCard />
                <ExperienceCard />
                <ExperienceCard />
            </div>
        </motion.div>
    );
}

export default WorkExperience;