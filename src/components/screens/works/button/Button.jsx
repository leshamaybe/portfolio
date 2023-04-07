import React from 'react';
import Link from 'next/link';
import s from './button.module.scss';
import cn from 'classnames';

const Button = ({ link }) => {
    return (
        <Link href={link} className={cn(s.btn, s['btn-1'])}>
            VIEW PROJECT
        </Link>
    );
};

export default Button;
