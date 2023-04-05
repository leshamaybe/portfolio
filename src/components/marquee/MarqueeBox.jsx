import React from 'react';
import Marquee from 'react-fast-marquee';
import s from './marquee.module.scss';

const MarqueeBox = () => {
    return (
        <div>
            <Marquee gradientColor="[255, 255, 255]" speed="150" className={s.marquee}>
                <h1>AVAILABLE FOR WORK</h1>
            </Marquee>
        </div>
    );
};

export default MarqueeBox;
