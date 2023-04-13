import React from 'react';
import s from './home.module.scss';
import Social from '@/components/social/Social';
import AnimatedText from '../../../animation/AnimatedText/AnimatedText';

const HomePage = () => {
    return (
        <div className={s.box}>
            <div className={s.text}>
                <AnimatedText text="Hey, I'm Aleksey" />
                <h2>
                    I am a novice, curious developer based in Voronezh, Russia. Specialised in
                    front-end development using React, JavaScript and TypeScript.
                </h2>
            </div>
            <Social />
        </div>
    );
};

export default HomePage;
