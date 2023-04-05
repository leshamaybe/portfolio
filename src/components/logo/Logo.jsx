import React from 'react';
import s from './logo.module.scss';
import Link from 'next/link';

const Logo = () => {
    return (
        <Link href={'/'} className={s.text}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                viewBox="0 0 24 24"
                width="24"
                height="24">
                <path
                    fill=""
                    d="M22 11a2.00229 2.00229 0 0 1-2-2V6a4.00427 4.00427 0 0 0-4-4 1 1 0 0 0 0 2 2.00229 2.00229 0 0 1 2 2V9a3.97473 3.97473 0 0 0 1.3822 3A3.97473 3.97473 0 0 0 18 15v3a2.00229 2.00229 0 0 1-2 2 1 1 0 0 0 0 2 4.00427 4.00427 0 0 0 4-4V15a2.00229 2.00229 0 0 1 2-2 1 1 0 0 0 0-2zM6 9V6A2.00229 2.00229 0 0 1 8 4 1 1 0 0 0 8 2 4.00427 4.00427 0 0 0 4 6V9a2.00229 2.00229 0 0 1-2 2 1 1 0 0 0 0 2 2.00229 2.00229 0 0 1 2 2v3a4.00427 4.00427 0 0 0 4 4 1 1 0 0 0 0-2 2.00229 2.00229 0 0 1-2-2V15a3.97473 3.97473 0 0 0-1.3822-3A3.97473 3.97473 0 0 0 6 9z"
                    className="color6563ff svgShape"></path>
            </svg>
            <span>leshamaybe.</span>
        </Link>
    );
};

export default Logo;
