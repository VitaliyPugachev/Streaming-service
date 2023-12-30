import {RoutePath} from "shared/config/routeConfig/routeConfig";
import React, {ReactElement} from "react";
import {ReactComponent as Home} from "shared/assets/icons/home.svg";
import {ReactComponent as Action} from "shared/assets/icons/action.svg";
import {ReactComponent as Comedy} from "shared/assets/icons/comedy.svg";
import {ReactComponent as Fantasy} from "shared/assets/icons/fantasy-elf.svg";
import {ReactComponent as Historical} from "shared/assets/icons/history.svg";
import {ReactComponent as Criminal} from "shared/assets/icons/Gun.svg";
import {ReactComponent as Adventure} from "shared/assets/icons/adventure.svg";
import {ReactComponent as Horror} from "shared/assets/icons/ghost.svg";
import {MovieGenre} from "entities/Movie";
import {Icon} from "shared/ui/Icon/Icon";

export interface SidebarItemsListProps {
    text: string;
    path: RoutePath,
    icon: ReactElement
}

export const SidebarItemsList: SidebarItemsListProps[] = [
    {
        text: 'Главная',
        path: RoutePath.MAIN,
        icon: <Icon Svg={Home}/>
    },
    {
        text: MovieGenre.ACTION,
        path: RoutePath.ACTION,
        icon: <Icon Svg={Action} />
    },
    {
        text: MovieGenre.FANTASY,
        path: RoutePath.FANTASY,
        icon: <Icon Svg={Fantasy}/>
    },
    {
        text: MovieGenre.COMEDY,
        path: RoutePath.COMEDY,
        icon: <Icon Svg={Comedy}/>
    },
    {
        text: MovieGenre.HISTORICAL,
        path: RoutePath.HISTORICAL,
        icon: <Icon Svg={Historical}/>
    },
    {
        text: MovieGenre.CRIMINAL,
        path: RoutePath.CRIMINAL,
        icon: <Icon Svg={Criminal}/>
    },
    {
        text: MovieGenre.ADVENTURES,
        path: RoutePath.ADVENTURES,
        icon: <Icon Svg={Adventure}/>
    },
    {
        text: MovieGenre.HORROR,
        path: RoutePath.HORROR,
        icon: <Icon Svg={Horror}/>
    },


]
