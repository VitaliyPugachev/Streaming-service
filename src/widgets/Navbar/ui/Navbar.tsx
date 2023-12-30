import { Logo } from 'shared/ui/Logo/Logo';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from 'shared/ui/LanguageSwitcher/LanguageSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import { Search } from 'shared/ui/Search/Search';
import cls from './Navbar.module.scss';

export function Navbar() {
    const { t } = useTranslation();

    return (
        <div className={cls.Navbar}>
            <div className={cls.logo}>
                <Logo />
                {'Movie Hub'}
            </div>

            <Search />
            <LanguageSwitcher />
            <ThemeSwitcher />
        </div>
    );
}
