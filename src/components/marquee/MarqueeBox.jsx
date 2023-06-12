import React from 'react';
import Marquee from 'react-fast-marquee';

const MarqueeBox = () => {
    return (
        <Marquee
            gradientColor="[255, 255, 255]"
            speed="150"
            className="max-w-120+50 bg-light-grey h-25+2 rounded-[20px] duration-[0.25s] cursor-pointer border-[1.5px] border-transparent transition-all hover:scale-105 hover:border-[1.5px] hover:border-dark-grey">
            <h1 className="flex items-center text-12+1 text-normal before:marquee-circle">
                AVAILABLE FOR WORK
            </h1>
        </Marquee>
    );
};

export default MarqueeBox;
