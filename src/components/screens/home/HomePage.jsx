import React from 'react';
import Marquee from 'react-fast-marquee';
import { motion, useScroll, useTransform } from 'framer-motion';
import Social from '@/components/social/Social';
import Project from '@/components/project/Projects';
import AnimatedText from '../../../animation/AnimatedText/AnimatedText';
import s from './home.module.scss';

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
            <motion.section style={{y}} className={s.home}>
                <div className={s.container}>
                    <div className={s.text}>
                        <AnimatedText text="Hey, I'm Aleksey" />
                        <AnimatedText text="Front-end" />
                        <AnimatedText text="Developer" />
                        <h2>
                            I am a novice, curious developer based in Voronezh, Russia. Specialised
                            in front-end development using React, JavaScript and TypeScript.
                        </h2>
                    </div>
                    <Social />
                </div>
            </motion.section>

            <section className={s.works}>
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

            <section className={s['marquee-box']}>
                <Marquee direction="right" className={s.marquee} gradient={false} speed="100">
                    {techs.map((item) => {
                        return <span key={item}>{item}</span>;
                    })}
                </Marquee>
                <Marquee className={s.marquee} gradient={false} speed="70">
                    {software.map((item) => {
                        return <span key={item}>{item}</span>;
                    })}
                </Marquee>
                <Marquee direction="right" className={s.marquee} gradient={false} speed="40">
                    {techs.map((item) => {
                        return <span key={item}>{item}</span>;
                    })}
                </Marquee>
            </section>
        </>
    );
};

export default HomePage;
