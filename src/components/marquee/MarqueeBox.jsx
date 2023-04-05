import React, { useState, useEffect } from 'react';
import Marquee from 'react-fast-marquee';
import s from './marquee.module.scss';

function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return windowSize;
}

const MarqueeBox = () => {
    const size = useWindowSize();

    return (
        <div>
            {size.width > 750 && (
                <Marquee gradientColor="[255, 255, 255]" speed="150" className={s.marquee}>
                    <h1>AVAILABLE FOR WORK</h1>
                </Marquee>
            )}
        </div>
    );
};

export default MarqueeBox;
