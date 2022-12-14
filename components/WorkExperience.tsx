import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { Experience } from "../typing";
type Props = { experiences: Experience[] };

function WorkExperience({ experiences }: Props) {
    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            whileInView={{ opacity: 1 }}
            transition={{
                duration: 1.5,
            }}
            className="h-screen flex flex-col relative overflow-hidden text-left md:flex-row max-w-full px-10 justify-evenly items-center "
        >
            <h3 className="absolute top-20 bottom-3 uppercase tracking-[20px] text-[rgb(249,210,228)]/70 text-2xl">
                Experience
            </h3>
            <div className="w-full mt-16 flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[rgb(249,210,228)]">
                {experiences?.map((experience) => (
                    <ExperienceCard
                        key={experience._id}
                        experience={experience}
                    />
                ))}
            </div>
        </motion.div>
    );
}

export default WorkExperience;
