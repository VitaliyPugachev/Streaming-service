import cls from './Navbar.module.scss';
import {Input} from "shared/ui/Input/Input";
import {Logo} from "shared/ui/Logo/Logo";
import {ReactComponent as SearchIcon} from 'shared/assets/icons/search.svg';
import {useTranslation} from "react-i18next";
import {LanguageSwitcher} from "../../../shared/ui/LanguageSwitcher/LanguageSwitcher";


export const Navbar = () => {

    const {t, i18n} = useTranslation();

    return (
        <div className={cls.Navbar}>
            <div className={cls.toggle_sidebar}>
                {t('SomeText')}
            </div>
            <Logo/>
            <div className={cls.search}>
                <Input placeholder={'Поиск'}/>
                <SearchIcon width={25}/>
            </div>
            <LanguageSwitcher/>
        </div>
    )
}
