import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import cn from 'classnames';

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
        <nav className="max-w-[450px] w-full">
            <ul className="flex justify-around my-4 p-0">
                {navItems.map(({ href, title }) => (
                    <li className="list-none" key={title}>
                        <Link
                            href={href}
                            data-testid={title}
                            className={cn(
                                'bg-gradient p-[5px] text-12+3 duration-[0.25s] ease hover:bg-[length:100%_2px] hover:text-primary-black',
                                {
                                    ['bg-[length:100%_2px] text-primary-black']: href === pathname,
                                    ['text-dark-grey']: href !== pathname,
                                },
                            )}>
                            {title}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Nav;
