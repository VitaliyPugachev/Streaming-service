import { ReactComponent as MainLogo } from 'shared/assets/icons/film-icon.svg';
import { memo } from 'react';
import cls from './Logo.module.scss';

interface LogoProps {
    text: string
}

export const Logo = memo(({text}: LogoProps) => (
    <div className={cls.logo} data-testid="logo">
        <MainLogo height={25} width={25} />
        <span>{text}</span>
    </div>
));
