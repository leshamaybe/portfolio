import React from 'react';
import Social from '../social/Social';
import s from './footer.module.scss';

const Footer = () => {
    return (
        <footer className={s.footer}>
            <h1>© 2023 Aleksey Voronko</h1>
            <Social />
        </footer>
    );
};

export default Footer;
