import React from "react";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { PageInfo } from "../typing";
type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
};
type Props = { pageInfo: PageInfo };

function ContactMe({ pageInfo }: Props) {
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:milashaohuibergmann@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}`;
    };
    return (
        <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl justify-evenly mx-auto items-center ">
            <div className="flex flex-col space-y-10">
                <h4 className="text-[rgb(249,210,228)] text-2xl mt-16 md:text-4xl font-semibold text-center ">
                    <span className="underline">Let&apos; Talk</span>
                </h4>
                <div className="space-y-10 text-[rgb(249,210,228)]">
                    <div className="flex items-center space-x-5 justify-center">
                        <EnvelopeIcon className=" text-[rgb(249,210,228)] h-7 w-7 animate-pulse" />
                        <p className="text-lg md:text-2xl">{pageInfo.email}</p>
                    </div>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="w-fit flex flex-col space-y-2 md:w-fit mx-auto"
                    >
                        <div className="flex flex-col md:flex-row md:space-x-2">
                            <input
                                {...register("name")}
                                placeholder="Name"
                                className="contactInput"
                                type="text"
                            />
                            <input
                                {...register("email")}
                                placeholder="EMail"
                                className="contactInput"
                                type="email"
                            />
                        </div>
                        <input
                            {...register("subject")}
                            placeholder="Subject"
                            className="contactInput"
                            type="text"
                        />
                        <textarea
                            {...register("message")}
                            placeholder="Message"
                            className="contactInput"
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-[rgb(249,210,228)] py-5 px-10 rounded-md text-[rgb(1,132,127)] font-bold"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactMe;
