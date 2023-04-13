import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import s from './project.module.scss';
import Button from './button/Button';

const Project = ({ id, name, desc, tools, src, link }) => {
    const zoomOut = {
        scale: {
            scale: [null, 0.9, 0.9],
            transition: {
                duration: 0.4,
            },
        },
    };

    const movingText = {
        hidden: { opacity: 1, scale: 0.5 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.4,
                staggerChildren: 0,
            },
        },
    };

    const movingChild = {
        hidden: {
            y: '200%',
            transition: {
                type: 'tween',
                duration: 0.7,
                linear: 0.5,
            },
        },
        visible: {
            y: 0,
            transition: {
                type: 'tween',
                duration: 0.7,
            },
        },
    };

    return (
        <div className={s.box}>
            <motion.div variants={zoomOut} whileHover="scale" className={s['img-box']}>
                <Link href={link}>
                    <Image alt="project" src={src} />
                </Link>
            </motion.div>

            <motion.div
                variants={movingText}
                initial="hidden"
                animate="visible"
                className={s['text-box']}>
                <div className={s['animate-container']}>
                    <motion.h2 variants={movingChild}>Featured Project</motion.h2>
                </div>
                <div className={s['animate-container']}>
                    <motion.h1 variants={movingChild}>{name}</motion.h1>
                </div>
                <div className={s['animate-container']}>
                    <motion.ul variants={movingChild}>
                        {tools.map((tool) => {
                            return <li key={tool}>{tool}</li>;
                        })}
                    </motion.ul>
                </div>

                <Button classname={s['btn-work']} link={link} />
            </motion.div>
        </div>
    );
};

export default Project;
