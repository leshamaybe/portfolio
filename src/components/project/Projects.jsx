import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
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
        <motion.div
            style={{ y }}
            className="flex flex-col-reverse justify-center md:even:flex-row-reverse md:flex-row md:justify-between items-center mb-80+30 last:mb-[50px]">
            <div className="bg-project-msg bg-no-repeat bg-cover bg-center drop-shadow-[0_0_5px_#0505af]">
                <div className="relative flex flex-col justify-center py-0 px-[10%] max-w-full h-380+115 text-left even:text-right backdrop-blur-xl text-second-color">
                    <Button
                        classname="absolute bottom-[-30px] right-[50%] translate-x-[50%] bg-primary-color border-primary-color text-second-color text-center"
                        link={link}
                    />
                    <h3 className="text-20+25 pb-10+10 font-bold">{name}</h3>
                    <p className="text-14+4">{desc}</p>
                </div>
            </div>

            <h2 className="md:mx-10+10 tracking-tight text-27+50 uppercase text-center text-primary-color font-bold mx-0 mb-5">
                {title}
            </h2>
        </motion.div>
    );
};

export default Project;
