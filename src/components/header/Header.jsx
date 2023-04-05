import React from 'react';
import Nav from '../navigation/Nav';
import Logo from '../logo/Logo';
import MarqueeBox from '../marquee/MarqueeBox';
import s from './header.module.scss';

const Header = () => {
    return (
        <header className={s.header}>
            <Logo />
            <MarqueeBox />
            <Nav />
        </header>
    );
};

export default Header;
