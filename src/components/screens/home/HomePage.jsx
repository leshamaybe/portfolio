import React from 'react';
import Marquee from 'react-fast-marquee';
import { motion, useScroll, useTransform } from 'framer-motion';
import Social from '@/components/social/Social';
import Project from '@/components/project/Projects';
import AnimatedText from '../../../animation/AnimatedText/AnimatedText';

const techs = ['Next.js', 'React', ' JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'S(a|c)ss'];
const software = ['VScode', 'Figma', 'Framer', 'AdobeXD', 'Git', 'Docker'];

const projectItems = [
    {
        id: 1,
        title: 'Messenger',
        name: 'Full realtime Chat Application',
        desc: 'The Messenger app is a real-time chat application built with React, JavaScript, Socket.io, Express, and MongoDB. It allows users to communicate through instant messaging, and provides a dynamic and responsive interface for sending and receiving messages.',
        link: 'https://github.com/leshamaybe/react-express-socket-chat-app',
    },
    {
        id: 2,
        title: 'Weather App',
        name: 'Weather app on the OpenWeatherMap API',
        desc: 'A weather application built with React that displays current weather conditions for a selected location. Uses OpenWeatherMap API for weather data.',
        link: 'https://github.com/leshamaybe/react-weather-app',
    },
    {
        id: 3,
        title: 'Landing page',
        name: 'A ReactJS based landing page',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos optio asperiores aliquid in. Et dolor nobis, ad facere asperiores dicta cum numquam consequuntur tempora corporis?',
        link: '/',
    },
];

const HomePage = () => {
    let { scrollYProgress } = useScroll();
    let y = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);

    return (
        <>
            <motion.section style={{ y }} className="md:w-[90%] w-full">
                <div className="flex flex-col font-monument uppercase pt-10+10 px-4">
                    <div>
                        <AnimatedText
                            text="Hey, I'm Aleksey Front-end Developer"
                            className="flex flex-wrap overflow-hidden max-[768px]:text-26+50 max-[768px]:w-full min-[3000px]:text-[240px] text-23+72 w-[90%] font-extrabold text-primary-color tracking-tight leading-25+60"
                        />
                        <h2 className="md:mt-[150px] md:mb-10 md:ml-[50%] md:text-right md:max-w-[70%] mt-5 mb-[40px] mx-0 text-left max-w-full text-18+7 leading-30+15 text-primary-color ">
                            I am a novice, curious developer based in Voronezh, Russia. Specialised
                            in front-end development using React, JavaScript and TypeScript.
                        </h2>
                    </div>
                    <Social />
                </div>
            </motion.section>

            <section className="w-full mt-80+30">
                {projectItems.map(({ id, title, name, desc, link }) => {
                    return (
                        <Project
                            key={id}
                            id={id}
                            title={title}
                            name={name}
                            desc={desc}
                            link={link}
                        />
                    );
                })}
            </section>

            <section className="self-center w-[100vw] pt-70+15 pb-3 overflow-hidden">
                <Marquee direction="right" gradient={false} speed="100">
                    {techs.map((item) => {
                        return (
                            <span
                                className="text-marquee-dynamic py-10+10 px-52+20 duration-[0.2s] cursor-crosshair even:font-medium hover:text-primary-color before:orange-circle"
                                key={item}>
                                {item}
                            </span>
                        );
                    })}
                </Marquee>
                <Marquee gradient={false} speed="70">
                    {software.map((item) => {
                        return (
                            <span
                                className="text-marquee-dynamic py-10+10 px-52+20 duration-[0.2s] cursor-crosshair even:font-medium hover:text-primary-color before:orange-circle"
                                key={item}>
                                {item}
                            </span>
                        );
                    })}
                </Marquee>
                <Marquee direction="right" gradient={false} speed="40">
                    {techs.map((item) => {
                        return (
                            <span
                                className="text-marquee-dynamic py-10+10 px-52+20 duration-[0.2s] cursor-crosshair even:font-medium hover:text-primary-color before:orange-circle"
                                key={item}>
                                {item}
                            </span>
                        );
                    })}
                </Marquee>
            </section>
        </>
    );
};

export default HomePage;
