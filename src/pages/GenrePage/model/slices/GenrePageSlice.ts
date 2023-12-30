import {createSlice} from "@reduxjs/toolkit";
import {MoviesList} from "entities/Movie/model/types/moviesList";
import {fetchMovieListByGenre} from "../services/fetchMovieListByGenre/fetchMovieListByGenre";


const initialState: MoviesList = {
    error: '',
    isLoading: false,
    data: [],
}

export const movieListByGenreSlice = createSlice({
    name: 'movie/movieListByGenre',
    initialState,
    reducers: {

    },
    extraReducers: (builder => {
        builder.addCase(fetchMovieListByGenre.pending, (state) => {
            state.isLoading = true;
            state.error = undefined;
        })
        builder.addCase(fetchMovieListByGenre.fulfilled, (state: MoviesList, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(fetchMovieListByGenre.rejected, (state) => {
            state.isLoading = false;
            state.error = 'error';
        })
    })

})

export const {actions: movieListByGenreActions} = movieListByGenreSlice;
export const {reducer: movieListByGenreReducer} = movieListByGenreSlice;
