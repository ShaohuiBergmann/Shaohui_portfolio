import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";
import { PageInfo } from "../typing";
import { urlFor } from "../sanity";
type Props = { pageInfo: PageInfo };

function Hero({ pageInfo }: Props) {
    const [text, count] = useTypewriter({
        words: [
            `Hi, my name is ${pageInfo?.name}.`,
            "Who-loves-coding",
            "<ButLovesSpicyFoodMore />",
        ],
        loop: true,
        delaySpeed: 2000,
    });
    return (
        <div className="text-[#F9D2E4] h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
            <BackgroundCircles />
            <img
                src={urlFor(pageInfo?.heroImg).url()}
                alt="Patience"
               
                className="relative rounded-full h-56 w-56 mx-auto object-cover"
            />
            <div className="z-20">
                <h2 className="text-lg uppercase pb-2 tracking-[15px]">
                {pageInfo?.role}
                </h2>
                <h1 className="text-5xl lg:text-6xl font-semibold px-10 ">
                    <span className="mr-3">{text}</span>
                    <Cursor cursorColor="#F9D2E4" />
                </h1>
                <div className="pt-5">
                    <Link href="#about">
                        <button className="heroButton">About</button>
                    </Link>
                    <Link href="#experience">
                        <button className="heroButton">Experience</button>
                    </Link>
                    <Link href="#skills">
                        <button className="heroButton">Skills</button>
                    </Link>
                    <Link href="#projects">
                        <button className="heroButton">Projects</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Hero;
