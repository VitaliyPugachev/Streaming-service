import {memo} from "react";
import {NavLink} from "react-router-dom";
import {SidebarItemsListProps} from "./Items";
import cls from './SidebarItem.module.scss';
import {useTranslation} from "react-i18next";


interface SidebarItemProps {
    item: SidebarItemsListProps;
    collapsed: boolean;
}

export const SidebarItem = memo(({item, collapsed} : SidebarItemProps) => {

    const {t} = useTranslation();

    return (
        <NavLink
            to={item.path}
            key={item.path}
            className={cls.SidebarItem}
        >
            <div className={cls.icon}>
                {item.icon}
            </div>
            {!collapsed && t(item.text)}
        </NavLink>
    )
});
