import React from 'react';
import Social from '../social/Social';
import s from './footer.module.scss';

const Footer = () => {
    return (
        <footer className={s.footer}>
            © 2023 Aleksey Voronko
            <Social />
        </footer>
    );
};

export default Footer;
