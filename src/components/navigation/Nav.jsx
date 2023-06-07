import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import cn from 'classnames';
import s from './nav.module.scss';

export const navItems = [
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
    const pathname = usePathname();

    return (
        <nav className={s.navbar}>
            <ul>
                {navItems.map(({ href, title }) => (
                    <li key={title}>
                        <Link
                            href={href}
                            data-testid={title}
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
