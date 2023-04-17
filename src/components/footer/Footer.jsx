import React from 'react';
import Social from '../social/Social';
import s from './footer.module.scss';

const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={s.container}>
                © 2023 Aleksey Voronko
                <Social />
            </div>
        </footer>
    );
};

export default Footer;
