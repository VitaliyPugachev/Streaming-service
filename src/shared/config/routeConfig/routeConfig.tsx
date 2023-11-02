import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";
import {RouteProps} from "react-router";
export enum RoutePath {
    MAIN = '/',
    ABOUT = '/about'
}

export const RouteConfig:RouteProps[] = [
    {
        path: RoutePath.MAIN,
        element: <MainPage/>
    },
    {
        path: RoutePath.ABOUT,
        element: <AboutPage/>
    }
]

