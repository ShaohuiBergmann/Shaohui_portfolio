import React from "react";
import { motion } from "framer-motion";

type Props = {};

function ExperienceCard({}: Props) {
    return (
        <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#F9D2E4] p text-[rgb(1,132,127)]
        hover:opacity-100 opacity-60 cursor-pointer transition-opacity duration-200 overflow-hidden ">
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
                className="h-32 w-32 rounded-full xl:h-[200px] xl:w-[200px] object-cover "
                src="./edu.png"
                alt="Patience"
            />
            <div className="px-0 md:px-10">
                <h4 className="uppercase text-4xl font-light mt-2">
                    Teaching Coordinator und Marketing Assistant
                </h4>
                <p className="mt-2">02/2019 – 10/2020</p>
                <p className="font-bold text-2xl mt-2">
                    Yashi Education Co., Ltd, Guangzhou, China
                </p>
                <ul className="list-disc mt-2  ml-5 text-lg">
                    <li>
                        improved communication skills, once managed to collect
                        more than 150 customer contacts within one afternoon.
                    </li>
                    <li className="mt-2 mb-5">
                        contact all possible media and KOLs to promote the
                        course
                    </li>
                </ul>
            </div>
        </article>
    );
}

export default ExperienceCard;
