import Head from 'next/head';
import React from 'react';
import s from './mainContainer.module.scss';
import Social from '../social/Social';
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
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
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
