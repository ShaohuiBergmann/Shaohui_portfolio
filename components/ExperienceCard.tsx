import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typing";
import { urlFor } from "../sanity";

type Props = { experience: Experience };

function ExperienceCard({ experience }: Props) {
    return (
        <article
            className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#F9D2E4] p text-[rgb(1,132,127)]
        hover:opacity-100 opacity-60 cursor-pointer transition-opacity duration-200 overflow-hidden "
        >
            <motion.img
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
                className="mt-5 h-32 w-32 rounded-full xl:h-[200px] xl:w-[200px] object-cover "
                src={urlFor(experience?.companyImg).url()}
                alt="Patience"
            />
            <div className="px-0 md:px-10">
                <h4 className="uppercase text-2xl font-light mt-2">
                    {experience.jobTitle}
                </h4>
                <p className="mt-2">{experience.compony} </p>
                <p className="font-bold text-lg mt-2">
                    {experience.dateStarted} - {experience.dateEnded}
                </p>
                <ul className="list-disc mt-2  ml-5 text-lg h-40">
                    {experience.points.map((point, i) => (
                        <li key={i} className="mt-2 mb-5">{point}</li>
                    ))}
                </ul>
            </div>
        </article>
    );
}

export default ExperienceCard;
