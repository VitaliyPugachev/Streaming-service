import {configureStore, createSlice} from "@reduxjs/toolkit";
import {MovieCardSchema} from "entities/Movie/model/types/movieCard";
import {movieReducer} from "entities/Movie/model/slices/movieSlice";
import {Movie} from "../../../../entities/Movie/model/types/movie";
import {MoviesList} from "../../../../entities/Movie/model/types/moviesList";
import {movieListReducer} from "../../../../entities/Movie/model/slices/movieListSlice";

export interface StateSchema {
    movie: Movie;
    movieList: MoviesList
}

export function createReduxStore(initialState?: StateSchema) {
    return configureStore<StateSchema>({
        reducer: {
            movie: movieReducer,
            movieList: movieListReducer
        },
        preloadedState: initialState || {}
    })

}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
