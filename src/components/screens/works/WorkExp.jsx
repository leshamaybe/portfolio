import React from 'react';
import Projects from '../../project/Projects';
import weather from '../../../assets/works/weather.png';
import chat from '../../../assets/works/chat.png';
import whales from '../../../assets/works//whales.png';

const projectItems = [
    {
        id: 1,
        name: 'Messenger',
        desc: "The Messenger app is a real-time chat application built with React, JavaScript, Socket.io, Express, and MongoDB. It allows users to communicate through instant messaging, and provides a dynamic and responsive interface for sending and receiving messages. It's not finished yet :(",
        tools: ['React', 'Hooks', 'Express', 'Socket.io', 'MongoDB', 'Axios', 'JWT-token'],
        img: chat,
    },
    {
        id: 2,
        name: 'Weather',
        desc: 'A weather application built with React that displays current weather conditions for a selected location. Uses OpenWeatherMap API for weather data.',
        tools: ['React', 'Hooks', 'Axios'],
        img: weather,
    },
    {
        id: 3,
        name: 'whales',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos optio asperiores aliquid in. Et dolor nobis, ad facere asperiores dicta cum numquam consequuntur tempora corporis?',
        tools: ['React', 'Hooks', 'Redux', 'Express', 'MongoDB', 'Axios'],
        img: whales,
    },
];

const WorkExp = () => {
    return (
        <>
            {projectItems.map(({ id, name, desc, tools, img }) => {
                return <Projects key={id} name={name} desc={desc} tools={tools} src={img} />;
            })}
        </>
    );
};

export default WorkExp;
