import React from "react";

type Props = {};

function Projects({}: Props) {
    //for demon purpose 
    const projects = [1,2,3,4]
    return (
        <div className="h-screen relative flex  overflow-hidden flex-col text-left md:flex-row mx-w-full justify-evenly mx-auto items-center z-0 ">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-[rgb(249,210,228)]/70 text-2xl">
                Projects
            </h3>
            <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
                <div></div>
            </div>
            <div className="w-full absolute top-[30%] bg-[rgb(249,210,228)]/60 left-0 h-[500px] -skew-y-12"></div>
        </div>
    );
}

export default Projects;
