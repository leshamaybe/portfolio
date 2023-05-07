import React from 'react';
import Link from 'next/link';
import s from './error.module.scss'

const Error404 = () => {
    return (
        <div className={s.error}>
            <h1>404</h1>
            <Link href="/">&#8592;Back home page</Link>
        </div>
    );
};

export default Error404;
