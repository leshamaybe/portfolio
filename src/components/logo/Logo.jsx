import React from 'react';
import Link from 'next/link';

const Logo = () => {
    return (
        <Link
            href={'/'}
            className="flex items-center leading-none font-extrabold text-14+4 h-4 no-underline ">
            leshamaybe.
        </Link>
    );
};

export default Logo;
