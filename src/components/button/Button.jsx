import React from 'react';
import Link from 'next/link';
import cn from 'classnames';

const Button = ({ link = '/', classname }) => {
    return (
        <Link href={link} className={cn('py-4 px-5 text-[14px] tracking-[2px] uppercase cursor-pointer', classname)}>
            VIEW PROJECT
        </Link>
    );
};

export default Button;
