import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typing";
type Props = { experiences: Experience[] };

function ExperienceCard({ experiences }: Props) {
    return (
        <article
            className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#F9D2E4] p text-[rgb(1,132,127)]
        hover:opacity-100 opacity-60 cursor-pointer transition-opacity duration-200 overflow-hidden "
        >
            {/* {experiences.map((experience)=>(<motion.img
            key={experience._id}
                initial={{
                    y: -100,
                    opacity: 0,
                }}
                transition={{
                    duration: 1.2,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                viewport={{ once: true }}
                className="h-32 w-32 rounded-full xl:h-[200px] xl:w-[200px] object-cover "
                src={experience?.companyImg}
                alt="Patience"
            />
            <div className="px-0 md:px-10">
                <h4 className="uppercase text-4xl font-light mt-2">
                    {experience?.jobTitle}
                </h4>
                <p className="mt-2"> {experience?.dateStarted} –  {experience?.dateEnded}</p>
                <p className="font-bold text-2xl mt-2">
                    {experience?.compony}
                </p>
                <ul className="list-disc mt-2  ml-5 text-lg">
                    <li>
                         {experience?.points[0]}
                    </li>
                    <li className="mt-2 mb-5">
                        {experience?.points[1]}
                    </li>
                </ul>
            </div>))} */}
        </article>
    );
}

export default ExperienceCard;
