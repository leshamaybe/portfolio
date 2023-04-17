import React from 'react';
import Marquee from 'react-fast-marquee';
import s from './home.module.scss';
import Social from '@/components/social/Social';
import AnimatedText from '../../../animation/AnimatedText/AnimatedText';

const techs = ['Next.js', 'React', ' JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'S(a|c)ss'];
const software = ['VScode', 'Figma', 'Framer', 'AdobeXD', 'Git', 'Docker'];

const HomePage = () => {
    return (
        <>
            <section className={s.home}>
                <div className={s.container}>
                    <div className={s.text}>
                        <AnimatedText text="</> Hey, I'm Aleksey" />
                        <h2>
                            I am a novice, curious developer based in Voronezh, Russia. Specialised
                            in front-end development using React, JavaScript and TypeScript.
                        </h2>
                    </div>
                    <Social />
                </div>
            </section>
            <section className={s['marquee-box']}>
                <Marquee className={s.marquee} gradient={false} speed="100">
                    {techs.map((item) => {
                        return <span key={item}>{item}</span>;
                    })}
                </Marquee>
                <Marquee className={s.marquee} gradient={false} speed="70">
                    {software.map((item) => {
                        return <span key={item}>{item}</span>;
                    })}
                </Marquee>
                <Marquee className={s.marquee} gradient={false} speed="35">
                    {software.map((item) => {
                        return <span key={item}>{item}</span>;
                    })}
                </Marquee>
            </section>
        </>
    );
};

export default HomePage;
