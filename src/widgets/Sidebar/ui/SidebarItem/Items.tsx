import {RoutePath} from "shared/config/routeConfig/routeConfig";
import React, {ReactElement} from "react";
import {ReactComponent as Home} from "shared/assets/icons/home.svg";

export interface SidebarItemsListProps {
    text: string;
    path: RoutePath,
    icon: ReactElement
}

export const SidebarItemsList: SidebarItemsListProps[] = [
    {
        text: 'Main',
        path: RoutePath.MAIN,
        icon: <Home/>
    },
    {
        text: 'About',
        path: RoutePath.ABOUT,
        icon: <Home/>
    },

]
