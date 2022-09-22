import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";

const Home: NextPage = () => {
    return (
        <div className="bg-[rgb(1,132,127)] text-rosepink h-screen snap-y snap-mandatory overflow-scroll z-0">
            <Head>
                <title>Shaohui's Portfolio</title>
            </Head>
            <Header />
            {/*Hero*/}
            <section id="hero" className="snap-center">
                <Hero />
            </section>
            {/*About*/}
            {/*Experience*/}
            {/*Skills*/}
            {/*Projects*/}
            {/*Contact*/}
        </div>
    );
};

export default Home;
