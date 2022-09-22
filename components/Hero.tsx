import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import profilePic from "../public/profile.jpg";
type Props = {};

function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hi, my name is Shaohui.",
            "Who-loves-coding",
            "<ButLovesSpicyFoodMore />",
        ],
        loop: true,
        delaySpeed: 2000,
    });
    return (
        <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
            <BackgroundCircles />
            <Image
                src={profilePic}
                alt="Patience"
                width={200}
                height={200}
                className="relative rounded-full mx-auto object-cover"
            />
            <div>
                <h2 className="text-lg uppercase pb-2 tracking-[15px]">
                    Full Stack Developer
                </h2>
                <h1>
                    <span className="text-3xl">{text}</span>
                    <Cursor cursorColor="#F9D2E4" />
                </h1>
            </div>
        </div>
    );
}

export default Hero;
