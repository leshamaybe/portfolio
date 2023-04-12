import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import s from './project.module.scss';
import Button from './button/Button';

const Project = ({ id, name, desc, tools, src, link }) => {
    const variants = {
        scale: {
            scale: [null, 0.9, 0.9],
            transition: {
                duration: 0.4,
            },
        },
    };

    return (
        <div className={s.box}>
            <motion.div variants={variants} whileHover="scale" className={s['img-box']}>
                <Link href={link}>
                    <Image src={src} />
                </Link>
            </motion.div>

            <div className={s['text-box']}>
                <h2>Featured Project</h2>
                <h1>{name}</h1>
                <ul>
                    {tools.map((tool) => {
                        return <li key={tool}>{tool}</li>;
                    })}
                </ul>
                <Button classname={s['btn-work']} link={link} />
            </div>
        </div>
    );
};

export default Project;
