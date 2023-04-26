import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import s from './project.module.scss';
import Button from '../button/Button';

const Project = ({ id, title, name, desc, link }) => {
    let { scrollYProgress } = useScroll();
    let y = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);

    const container = {
        hidden: {
            y: '100%',
            transition: {
                type: 'spring',
                duration: 0.3,
            },
        },
        visible: {
            y: 0,
            transition: {
                type: 'spring',
                duration: 0.3,
            },
        },
    };

    return (
        <motion.div style={{ y }} className={s.box}>
            <div className={s.bg}>
                <div className={s.inner}>
                    <Button classname={s.btn} link={link} />
                    <h3>{name}</h3>
                    <p>{desc}</p>
                </div>
            </div>

            <h2>{title}</h2>
        </motion.div>
    );
};

export default Project;
