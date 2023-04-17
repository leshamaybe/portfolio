import React from 'react';
import Project from '../../project/Projects';
import weather from '../../../assets/works/weather.png';
import chat from '@/assets/works/chat-group2.png';
import whales from '../../../assets/works//whales.png';
import s from './work.module.scss';

const projectItems = [
    {
        id: 1,
        name: 'Full realtime Chat Application',
        desc: 'The Messenger app is a real-time chat application built with React, JavaScript, Socket.io, Express, and MongoDB. It allows users to communicate through instant messaging, and provides a dynamic and responsive interface for sending and receiving messages.',
        tools: ['React', 'Hooks', 'Express', 'Socket.io', 'MongoDB'],
        img: chat,
        link: 'https://github.com/leshamaybe/react-express-socket-chat-app',
    },
    {
        id: 2,
        name: 'Weather app on the OpenWeatherMap API',
        desc: 'A weather application built with React that displays current weather conditions for a selected location. Uses OpenWeatherMap API for weather data.',
        tools: ['React', 'Hooks', 'Axios'],
        img: weather,
        link: 'https://github.com/leshamaybe/react-weather-app',
    },
    {
        id: 3,
        name: 'A ReactJS based landing page',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos optio asperiores aliquid in. Et dolor nobis, ad facere asperiores dicta cum numquam consequuntur tempora corporis?',
        tools: ['React', 'Hooks', 'Redux', 'Express', 'MongoDB', 'Axios'],
        img: whales,
        link: '/',
    },
];

const WorkExp = () => {
    return (
        <section className={s.contact}>
            <div className={s.container}>
                <h1 className={s.title}>Projects</h1>
                {projectItems.map(({ id, name, desc, tools, img, link }) => {
                    return (
                        <Project
                            id={id}
                            key={id}
                            name={name}
                            desc={desc}
                            tools={tools}
                            src={img}
                            link={link}
                        />
                    );
                })}
            </div>
        </section>
    );
};

export default WorkExp;
