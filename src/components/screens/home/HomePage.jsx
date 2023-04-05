import React from 'react';
import s from './home.module.scss';
import Social from '@/components/social/Social';
import AnimatedText from './AnimatedText/AnimatedText';

const HomePage = () => {
    return (
        <div className={s.home}>
            <div className={s.text}>
                <AnimatedText text="Hey, I'm Aleksey" />
                <h2>
                    I am a novice, curious developer based in Voronezh, Russia. Specialised in
                    front-end development using React, JavaScript and TypeScript.
                </h2>
            </div>
            <Social />

            {/* <motion.div className={s.skills} style={{ scaleY: scrollYProgress }}>
                <h2>Skills</h2>
                <h3>What I Can Do</h3>
                <div className={s['skill-box']}></div>
            </motion.div> */}
        </div>
    );
};

export default HomePage;
