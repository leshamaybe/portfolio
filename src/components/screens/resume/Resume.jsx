import React from 'react';
import Social from '@/components/social/Social';
import s from './resume.module.scss';
import Link from 'next/link';
import Download from '../../../assets/resume/Download';

const Resume = () => {
    return (
        <section data-testid="resume" className={s.resume}>
            <div className={s.container}>
                <h1>Aleksey Voronko</h1>
                <h3>👋 I'm a frontend developer</h3>
                <p>
                    Enthusiastic and detail-oriented junior Frontend Developer with good knowledge
                    of JS, HTML and CSS as well as third-party libraries, React and Redux. I strive
                    to use my technical skills and experience to benefit my employer and contribute
                    to successful projects both today and in the future.
                </p>

                <Social className={s['resume-social']} />

                <h2>Experience</h2>
                <section className={s.experience}>
                    <div className={s.left}>
                        <h3>July 2020 - November</h3>
                        <h4>Contract</h4>
                    </div>
                    <div className={s.right}>
                        <h3>Front-End Developer, Orion Group</h3>
                        <ul>
                            <li>
                                Worked on updating the site design and implementing new features
                            </li>
                        </ul>
                    </div>
                </section>

                <h2 className={s.subtitle}>Education</h2>
                <section className={s.education}>
                    <h3>Voronezh State Technical University (VSTU)</h3>
                    <h4>Bachelors in Business Informatics</h4>
                    <h4>2019 - present</h4>
                    <p>
                        Coursework: Fundamentals of programming and algorithmization;
                        Object-oriented programming; Databases; Testing; Technology for developing
                        Enterprise solutions; Computational methods and software; Intelligent data
                        analysis; Computer networks; Modeling processes and systems
                    </p>
                </section>

                <h2 className={s.subtitle}>Skills</h2>
                <section className={s.skills}>
                    <ul>
                        Languages
                        <li>JavaScript</li>
                        <li>Typescript</li>
                        <li>HTML5</li>
                        <li>CSS3</li>
                    </ul>
                    <ul>
                        Frameworks
                        <li>React</li>
                    </ul>
                    <ul>
                        Others
                        <li>Redux</li>
                        <li>VSCode</li>
                        <li>Git</li>
                        <li>MongoDB</li>
                        <li>Figma</li>
                        <li>AdobeXD</li>
                    </ul>
                </section>
                <div className={s.cv}>
                    Download PDF Version
                    <Link href={'/pdf/CV.pdf'} target="_blank">
                        <Download />
                        Aleksey_Voronko.pdf
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Resume;
