import React from 'react';
import { motion } from 'framer-motion';
import s from './animatedText.module.scss';
import cn from 'classnames';

const AnimatedText = ({ text, className }) => {
    const words = text.split(' ');

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            x: 25,
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <motion.h1 className={cn(s.display, className)} variants={container} initial="hidden" animate="visible">
            {words.map((word, i) => (
                <motion.span className={s.spacing} variants={child} key={i}>
                    {word}
                </motion.span>
            ))}
        </motion.h1>
    );
};

export default AnimatedText;
