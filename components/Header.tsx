import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { Social } from "../typing";

type Props = {
    socials: Social[];
};

function Header({ socials }: Props) {
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
                {socials.map((social) => (
                    <SocialIcon
                        key={social._id}
                        url={social.url}
                        fgColor="rgb(249,210,228)"
                        bgColor="transparent"
                    />
                ))}
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
                <Link href="#contact">
                    <div>
                        <SocialIcon
                            className="cursor-pointer"
                            network="email"
                            fgColor="rgb(249,210,228)"
                            bgColor="transparent"
                        />
                        <p className="uppercase hidden md:inline-flex text-md text-[rgb(249,210,228)] cursor-pointer">
                            Contact Me
                        </p>
                    </div>
                </Link>
            </motion.div>
        </header>
    );
}

export default Header;
