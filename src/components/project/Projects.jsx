import React from 'react';
import { motion } from 'framer-motion';
import s from './project.module.scss';
import Button from '../button/Button';

const Project = ({ id, title, name, desc, link }) => {
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
            <div className={s.bg}>
                <div className={s.inner}>
                    <Button classname={s.btn} link={link} />
                    <h3>{name}</h3>
                    <p>{desc}</p>
                </div>
            </div>

            <h2>{title}</h2>
        </div>
    );
};

export default Project;
