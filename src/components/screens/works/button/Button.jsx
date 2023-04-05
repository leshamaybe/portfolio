import React from 'react';
import s from './button.module.scss';
import cn from 'classnames';

const Button = () => {
    return (
        <div className={cn(s.btn, s['btn-1'], s['hover-filled-slide-left'])}>
            <span>VIEW PROJECT</span>
        </div>
    );
};

export default Button;
