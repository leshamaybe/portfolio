import React from 'react';
import Link from 'next/link';
import s from './button.module.scss';
import cn from 'classnames';

const Button = ({ link, classname }) => {
    return (
        <Link href={link} className={cn(s.btn, classname)}>
            VIEW PROJECT
        </Link>
    );
};

export default Button;
