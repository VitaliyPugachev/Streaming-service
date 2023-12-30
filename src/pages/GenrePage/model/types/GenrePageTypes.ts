import {MoviesList} from "../../../../entities/Movie/model/types/moviesList";

export interface GenrePage {
    isLoading: boolean,
    error: string,
    data: MoviesList
}
