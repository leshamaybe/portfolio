import React from 'react';
import s from './project.module.scss';
import Button from '../screens/works/button/Button';
import Image from 'next/image';

const Projects = ({ name, desc, tools, src }) => {
    return (
        <div className={s.info}>
            <div className={s.left}>
                <h1>{name}</h1>
                <p className={s.description}>{desc}</p>
                <h2>Development tools</h2>
                <ul>
                    {tools?.map((tool) => {
                        return <li key={tool}>{tool}</li>;
                    })}
                </ul>
                <Button />
            </div>

            <div className={s.right}>
                <Image className={s.img} src={src} alt="" />
            </div>
        </div>
    );
};

export default Projects;
