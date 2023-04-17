import React from 'react';
import Marquee from 'react-fast-marquee';
import s from './marquee.module.scss';
import useWindowSize from '@/hooks/useWindowSize';

const MarqueeBox = () => {
    const size = useWindowSize();

    return (
        <>
            {size.width > 750 && (
                <Marquee gradientColor="[255, 255, 255]" speed="150" className={s.marquee}>
                    <h1>AVAILABLE FOR WORK</h1>
                </Marquee>
            )}
        </>
    );
};

export default MarqueeBox;
