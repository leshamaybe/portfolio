import React from 'react';
import Link from 'next/link';
import s from './nav.module.scss';
import cn from 'classnames';
import { useRouter } from 'next/router';

export const navItems = [
    {
        href: '/works',
        title: 'Works',
    },
    {
        href: '/about',
        title: 'About',
    },
    {
        href: '/resume',
        title: 'Resume',
    },
    {
        href: '/contact',
        title: 'Contact',
    },
];

const Nav = () => {
    const { pathname } = useRouter();

    return (
        <nav className={s.navbar}>
            <ul>
                {navItems.map(({ href, title }) => (
                    <li key={title}>
                        <Link
                            href={href}
                            className={cn(s.link, { [s.current]: href === pathname })}>
                            {title}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Nav;
