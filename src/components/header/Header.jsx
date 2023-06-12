import React from 'react';
import dynamic from 'next/dynamic';
import useWindowSize from '@/hooks/useWindowSize';
import Nav from '../navigation/Nav';
import Logo from '../logo/Logo';

const LazyMarquee = dynamic(() => import('../marquee/MarqueeBox'));

const Header = () => {
    const size = useWindowSize();

    return (
        <header className="w-full">
            <div className="flex flex-row justify-between items-center px-4 py-7">
                <Logo />
                {size.width > 750 && <LazyMarquee />}
                <Nav />
            </div>
        </header>
    );
};

export default Header;
