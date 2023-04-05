import React from 'react';
import s from './social.module.scss';
import Link from 'next/link';
import Vk from '../../assets/social/Vk';
import Telegram from '../../assets/social/Telegram';
import LinkedIn from '../../assets/social/LinkedIn';
import Github from '../../assets/social/Github';

const Social = ({ className = s.social }) => {
    return (
        <div className={className}>
            <Link href={'https://github.com/leshamaybe'}>
                <Github color={'grey'} />
            </Link>
            <Link href={'https://vk.com/leshamaybe'}>
                <Vk color={'grey'} />
            </Link>
            <Link href={'https://t.me/blue_rari'}>
                <Telegram color={'grey'} />
            </Link>
            <Link href={'/'}>
                <LinkedIn color={'grey'} />
            </Link>
        </div>
    );
};

export default Social;
