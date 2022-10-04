import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
};
type Props = {};

function ContactMe({}: Props) {
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:milashaohuibergmann@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}`;
    };
    return (
        <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl justify-evenly mx-auto items-center ">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-[rgb(249,210,228)]/70 text-2xl">
                Contact
            </h3>
            <div className="flex flex-col space-y-10">
                <h4 className="text-[rgb(249,210,228)] text-4xl font-semibold text-center">
                    I have got just what you want.{" "}
                    <span className="underline">Let's Talk</span>
                </h4>
                <div className="space-y-10 text-[rgb(249,210,228)]">
                    <div className="flex items-center space-x-5 justify-center">
                        <PhoneIcon className=" text-[rgb(249,210,228)] h-7 w-7 animate-pulse" />
                        <p className="text-2xl">+491773528581</p>
                    </div>
                    <div className="flex items-center space-x-5 justify-center">
                        <MapPinIcon className=" text-[rgb(249,210,228)] h-7 w-7 animate-pulse" />
                        <p className="text-2xl">Address</p>
                    </div>
                    <div className="flex items-center space-x-5 justify-center">
                        <EnvelopeIcon className=" text-[rgb(249,210,228)] h-7 w-7 animate-pulse" />
                        <p className="text-2xl">
                            milashaohuibergmann@gmail.com
                        </p>
                    </div>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex flex-col space-y-2 w-fit mx-auto"
                    >
                        <div className="flex space-x-2">
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
                            className="bg-[rgb(249,210,228)] py-5 px-10 rounded-md text-black font-bold"
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
