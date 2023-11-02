import cls from "./Logo.module.scss";
import {ReactComponent as MainLogo} from "shared/assets/icons/film-icon.svg";

export const Logo = () => {
    return (
        <div className={cls.logo}>
            <MainLogo height={25} width={25}/>
            <span>MSH</span>
        </div>
    )
}
