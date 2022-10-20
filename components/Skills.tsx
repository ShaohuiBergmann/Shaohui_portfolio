import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { Skill as SkillType } from "../typing";

type Props = {
    skills: SkillType[];
};

function Skills({ skills }: Props) {
    return (
        <motion.div className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
            <h3 className="absolute top-20 uppercase tracking-[20px] text-[rgb(249,210,228)]/70 text-2xl  ">
                Skills
            </h3>
            <h3 className="invisible md:absolute  md:visible md:top-36 uppercase tracking-[3px] text-[rgb(249,210,228)]/70 text-sm">
                Hover over for current proficiency
            </h3>
            <div className="-mt-20 grid grid-cols-5 gap-y-8 gap-x-3 md:mt-0 md:grid-cols-4 md:gap-5 ">
                {skills?.slice(0, skills.length / 2).map((skill) => (
                    <Skill key={skill._id} skill={skill} />
                ))}
                {skills
                    ?.slice(skills.length / 2, skills.length)
                    .map((skill) => (
                        <Skill key={skill._id} skill={skill} directionLeft />
                    ))}
            </div>
        </motion.div>
    );
}

export default Skills;
