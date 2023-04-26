import Head from 'next/head';
import React from 'react';
import s from './mainContainer.module.scss';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { motion } from 'framer-motion';

const MainContainer = ({ children }) => {
    const container = {
        hidden: { opacity: 0, x: 0, y: 100 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: -100 },
    };

    return (
        <div className={s.wrapper}>
            <Head>
                <title>Leshamaybe portfolio | Front-end Developer</title>
                <meta
                    name="description"
                    content="A novice, curious developer based in Voronezh, Russia. Specialised in
                    front-end development using React, JavaScript and TypeScript."
                />
                <meta
                    name="keywords"
                    content="leshamaybe, portfolio, next.js, react, front-end, frontend"
                />
                <meta
                    name="google-site-verification"
                    content="ZFZEDCP0eK6-FizMfgK2shsqCntNWQOVsdwx0szmO5o"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" type="image/png" sizes="96x96" href="/favicon.png" />
            </Head>
            <Header />
            <motion.div
                className={s.children}
                variants={container}
                initial="hidden"
                animate="enter"
                exit="exit">
                {children}
            </motion.div>
            <Footer />
        </div>
    );
};

export default MainContainer;
