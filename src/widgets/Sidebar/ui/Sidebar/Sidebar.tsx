import cls from './Sidebar.module.scss';
import React, {useState} from "react";
import {ReactComponent as RightArrow} from 'shared/assets/icons/arrow-right.svg';
import {ReactComponent as LeftArrow} from 'shared/assets/icons/arrow-left.svg';
import {SidebarItem} from "../SidebarItem/SidebarItem";
import {SidebarItemsList} from "../SidebarItem/Items";

export function Sidebar() {
    const [collapsed, setCollapsed] = useState<boolean>(true);

    const collapse = () => {
        setCollapsed(collapsed => !collapsed)
    }

    return (
        <div className={`${cls.Sidebar} ${collapsed? cls.collapsed: ''}`}>
            <div className={cls.ItemsList}>
                {
                    SidebarItemsList.map(item =>
                        <SidebarItem
                            item={item}
                            collapsed={collapsed}
                        />
                    )
                }
            </div>
            <div
                onClick={() => collapse()}
                className={cls.collapse_btn}
            >
                {collapsed ?
                    <RightArrow />
                    :
                    <LeftArrow width={30} height={30}/>
                }
            </div>
        </div>
    );
}
