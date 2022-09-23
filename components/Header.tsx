import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

function Header({}: Props) {
    return (
        <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1.5,
                }}
                className="flex flex-row items-center"
            >
                <SocialIcon
                    url="https://www.linkedin.com/in/shaohui-bergmann/"
                    fgColor="rgb(249,210,228)"
                    bgColor="transparent"
                />
                <SocialIcon
                    url="https://github.com/ShaohuiBergmann"
                    fgColor="rgb(249,210,228)"
                    bgColor="transparent"
                />
                <SocialIcon
                    url="https://www.instagram.com/milawangwsh/"
                    fgColor="rgb(249,210,228)"
                    bgColor="transparent"
                />
            </motion.div>
            <motion.div
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1.5,
                }}
                className="flex flex-row items-center text-gray-300 cursor-pinter"
            >
                <SocialIcon
                    className="cursor-pinter"
                    network="email"
                    fgColor="rgb(249,210,228)"
                    bgColor="transparent"
                />
                <p className="uppercase hidden md:inline-flex text-md text-[rgb(249,210,228)]">
                    Contact Me
                </p>
            </motion.div>
        </header>
    );
}

export default Header;
