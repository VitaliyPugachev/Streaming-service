import cls from './Navbar.module.scss';
import {Input} from "shared/ui/Input/Input";
import {Logo} from "shared/ui/Logo/Logo";
import {ReactComponent as SearchIcon} from 'shared/assets/icons/search.svg';


export const Navbar = () => {
    return (
        <div className={cls.Navbar}>
            <div className={cls.toggle_sidebar}>
                ???
            </div>
            <Logo/>
            <div className={cls.search}>
                <Input placeholder={'Поиск'}/>
                <SearchIcon width={25}/>
            </div>
        </div>
    )
}
