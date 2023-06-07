import React from 'react';
import Social from '../social/Social';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import s from './footer.module.scss';

const Footer = () => {
    const pathname = usePathname();

    return (
        <footer className={s.footer}>
            <div className={s.container}>
                {pathname == '/' && (
                    <div className={s.top}>
                        <h1>Have a project in mind or want to talk?</h1>
                        <span>
                            Say hey at
                            <Link className={s.link} href={'mailto:vvaleksey@icloud.com'}>
                                {' '}
                                vvaleksey@icloud.com
                            </Link>
                        </span>
                    </div>
                )}
                <div className={s.bottom}>
                    <h2>© 2023 leshamaybe</h2>
                    <Social />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
