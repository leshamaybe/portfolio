import React from 'react';
import { motion } from 'framer-motion';

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
            marginRight: 18,
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
        <motion.h1 className={className} variants={container} initial="hidden" animate="visible">
            {words.map((word, i) => (
                <motion.span variants={child} key={i}>
                    {word}
                </motion.span>
            ))}
        </motion.h1>
    );
};

export default AnimatedText;
