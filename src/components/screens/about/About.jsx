import React from 'react';
import s from './about.module.scss';

const About = () => {
    return (
        <section data-testid="about" className={s.about}>
            <div className={s.container}>
                Hi, hello and welcome stranger
                <p>
                    My name is Alexei. Now I am studying at the Voronezh State Technical University
                    (VSTU) in the field of "Information Systems in Business". I started to study
                    frontend with HTML and CSS during the covid pandemic(2020). For a long time I
                    haven't studied JS and was making sites layout only for fun. Thus, I can say
                    that my introduction to frontend began in the summer of 2022.
                </p>
                <p>
                    The technologies I work with are JavaScript, HTML and CSS, React.js, Next.js and
                    some Node and Express frameworks. I use code not only to do day-to-day work, but
                    also to solve everyday problems I encounter, but also to solve everyday problems
                    I encounter. When I'm not programming, I'm doing my hobbies, which are: working
                    out, partying, meeting people, and self-development in general.
                </p>
            </div>
        </section>
    );
};

export default About;
