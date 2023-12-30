import {MovieCardSchema} from "./movieCard";

export interface MovieInfo {
    isLoading: boolean;
    error: string;
    data: MovieCardSchema
}

export enum MovieGenre {
    ACTION = 'Боевик',
    COMEDY = 'Комедия',
    FANTASY = 'Фэнтези',
    HISTORICAL = 'Исторический',
    CRIMINAL = 'Криминал',
    ADVENTURES = 'Приключения',
    HORROR = 'Ужасы'
}
