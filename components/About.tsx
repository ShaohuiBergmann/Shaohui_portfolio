import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "../typing";
import { urlFor } from "../sanity";

type Props = { pageInfo: PageInfo };

function About({ pageInfo }: Props) {
    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            whileInView={{ opacity: 1 }}
            transition={{
                duration: 1.5,
            }}
            className="flex flex-col relative h-screen text-center md:text-left md:flex-row mx-w-7xl px-10 justify-center mx-auto items-center "
        >
            <h3 className="absolute top-24 uppercase tracking-[20px] text-[rgb(249,210,228)]/70 text-2xl">
                About
            </h3>
            <motion.img
                initial={{
                    x: -200,
                }}
                transition={{
                    duration: 1.2,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                src={urlFor(pageInfo?.profilePic).url()}
                alt="Patience"
                className="-mb-14 mt-14 md:mb-0 flex-shrink-0 w-48 h-48  object-cover rounded-full md:rounded-lg md:w-56 md:h-95 xl:w-[500px] xl:h-[600px] "
            />
            <div className="space-y-10 px-0 md:px-10">
                <h4 className="invisible md:visible text-[#F9D2E4] text-4xl font-semibold ">
                    What&apos;s about me.
                </h4>
                <p className="text-lg md:text-2xl text-[#FECCC8]">
                    {pageInfo?.backgroundInfo}
                </p>
            </div>
        </motion.div>
    );
}

export default About;
