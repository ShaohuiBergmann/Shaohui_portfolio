import React from "react";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
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
                src="/makeupMe.JPG"
                alt="Patience"
                className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 object-cover rounded-full md:rounded-lg md:h-95 xl:w-[500px] xl:h-[600px] "
            />
            <div className="space-y-10 px-0 md:px-10">
                <h4 className="text-[#F9D2E4] text-4xl font-semibold">
                    What's about me.
                </h4>
                <p className="text-xl text-[#FECCC8]">
                    I recently graduated from a &nbsp;
                    <span className="underline decoration-[#F9D2E4] ">
                        12-week-long Full Stack Web Development bootcamp
                    </span>
                    , I’m able to build web apps using modern web development
                    technologies. I'm multilingual, a teamplayer, have great
                    communication skills. Currently I’m looking for an
                    opportunity to grow full web development skills in an
                    innovative environment.
                </p>
            </div>
        </motion.div>
    );
}

export default About;
