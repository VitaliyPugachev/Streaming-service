import { Logo } from 'shared/ui/Logo/Logo';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from 'shared/ui/LanguageSwitcher/LanguageSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import cls from './Navbar.module.scss';
import {SearchMovieByTitle} from "../../../features/fetchMovieTitles/ui/SearchMovieByTitle";

export function Navbar() {
    const { t } = useTranslation();

    return (
        <div className={cls.Navbar}>
            <div className={cls.logo}>
                <Logo text={'MSH'}/>
                {'Movie Hub'}
            </div>

            <SearchMovieByTitle/>
            <LanguageSwitcher />
            <ThemeSwitcher />
        </div>
    );
}
