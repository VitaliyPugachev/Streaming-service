import {MainPage} from 'pages/MainPage';
import {RouteProps} from 'react-router';
import {MovieInfo} from "pages/MoviePage";
import {GenrePage} from "pages/GenrePage";
import {MovieGenre} from "entities/Movie";

export enum RoutePath {
    MAIN = '/',
    MOVIE_INFO = '/movies/',
    ACTION = '/action',
    COMEDY = '/comedy',
    HISTORICAL = '/historycal',
    FANTASY = '/fantasy',
    CRIMINAL = '/criminal',
    ADVENTURES = '/adventures',
    HORROR = '/horror'
}

export const RouteConfig:RouteProps[] = [
    {
        path: RoutePath.MAIN,
        element: <MainPage />,
    },
    {
        path: `${RoutePath.MOVIE_INFO}:id`,
        element: <MovieInfo/>
    },
    {
        path: RoutePath.ACTION,
        element: <GenrePage genre={MovieGenre.ACTION} />,
    },
    {
        path: RoutePath.COMEDY,
        element: <GenrePage genre={MovieGenre.COMEDY} />,
    },
    {
        path: RoutePath.CRIMINAL,
        element: <GenrePage genre={MovieGenre.CRIMINAL} />,
    },
    {
        path: RoutePath.HISTORICAL,
        element: <GenrePage genre={MovieGenre.HISTORICAL} />,
    },
    {
        path: RoutePath.FANTASY,
        element: <GenrePage genre={MovieGenre.FANTASY} />,
    },
    {
        path: RoutePath.ADVENTURES,
        element: <GenrePage genre={MovieGenre.ADVENTURES} />
    },
    {
        path: RoutePath.HORROR,
        element: <GenrePage genre={MovieGenre.HORROR} />
    },


];
