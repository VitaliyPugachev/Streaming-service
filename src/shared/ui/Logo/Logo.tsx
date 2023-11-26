import { ReactComponent as MainLogo } from 'shared/assets/icons/film-icon.svg';
import { memo } from 'react';
import cls from './Logo.module.scss';

export const Logo = memo(() => (
    <div className={cls.logo}>
        <MainLogo height={25} width={25} />
        <span>MSH</span>
    </div>
));
