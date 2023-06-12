import React from 'react';
import Social from '../social/Social';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Footer = () => {
    const pathname = usePathname();

    return (
        <footer className="max-w-[1528px] w-full flex flex-col py-10 px-4">
            {pathname == '/' && (
                <div className="flex flex-col items-center text-primary-color mb-10+10">
                    <h1 className="uppercase font-monument text-20+25 text-center font-extrabold mb-10+10">
                        Have a project in mind or want to talk?
                    </h1>
                    <span className="text-18+7">
                        Say hey at
                        <Link
                            className="py-[5px] pr-[5px] ml-[5px] text-second-color bg-primary-black bg-wave hover:bg-hover-wave bg-repeat-x bg-[0_100%] bg-[length:auto_5px] "
                            href={'mailto:vvaleksey@icloud.com'}>
                            {' '}
                            vvaleksey@icloud.com
                        </Link>
                    </span>
                </div>
            )}
            <div className="flex items-center justify-between w-full">
                <h2 className='text-12+3'>© 2023 leshamaybe</h2>
                <Social />
            </div>
        </footer>
    );
};

export default Footer;
