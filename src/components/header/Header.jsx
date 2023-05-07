import React from 'react';
import dynamic from 'next/dynamic';
import useWindowSize from '@/hooks/useWindowSize';
import Nav from '../navigation/Nav';
import Logo from '../logo/Logo';
import s from './header.module.scss';

const LazyMarquee = dynamic(() => import('../marquee/MarqueeBox'));

const Header = () => {
    const size = useWindowSize();

    return (
        <header className={s.header}>
            <div className={s.container}>
                <Logo />
                {size.width > 750 && <LazyMarquee />}
                <Nav />
            </div>
        </header>
    );
};

export default Header;
