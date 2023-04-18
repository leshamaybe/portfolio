import React from 'react';
import Social from '../social/Social';
import s from './footer.module.scss';

const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={s.container}>
                <h2>© 2023 Aleksey Voronko</h2>
                <Social />
            </div>
        </footer>
    );
};

export default Footer;
