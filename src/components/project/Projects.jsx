import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import s from './project.module.scss';
import Button from './button/Button';

const Projects = ({ id, name, desc, tools, src, link }) => {
    return (
        <div className={s.box}>
            <motion.div className={s['img-box']}>
                <Image src={src} />
            </motion.div>

            <div className={s['text-box']}>
                <h2>App, Messenger</h2>
                <h1>{name}</h1>

                <Button classname={s['btn-work']} link={link} />
            </div>
        </div>
    );
};

export default Projects;
