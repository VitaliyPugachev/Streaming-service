import {configureStore, createSlice} from "@reduxjs/toolkit";
import {MovieCardSchema} from "entities/Movie/model/types/movieCard";
import {movieReducer} from "entities/Movie/model/slices/movieSlice";
import {MovieInfo} from "../../../../entities/Movie";
import {MoviesList} from "../../../../entities/Movie/model/types/moviesList";
import {movieListReducer} from "../../../../entities/Movie/model/slices/movieListSlice";
import {movieInfoReducer} from "../../../../pages/MoviePage/model/slices/movieInfoSlice";
import {movieListByGenreReducer} from "../../../../pages/GenrePage/model/slices/GenrePageSlice";

export interface StateSchema {
    // movie: MovieInfo;
    movieList: MoviesList;
    movieInfoPage: MovieInfo;
    movieListByGenre: MoviesList;
}

export function createReduxStore(initialState?: StateSchema) {
    return configureStore<StateSchema>({
        reducer: {
            // movie: movieReducer,
            movieList: movieListReducer,
            movieInfoPage: movieInfoReducer,
            movieListByGenre: movieListByGenreReducer
        },
        preloadedState: initialState || {}
    })

}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
