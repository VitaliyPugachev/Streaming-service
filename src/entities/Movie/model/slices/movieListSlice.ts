import {createSlice} from "@reduxjs/toolkit";
import {MoviesList} from "../types/moviesList";
import {fetchMovieList} from "../services/fetchMovieList/fetchMovieList";


const initialState: MoviesList = {
    error: '',
    isLoading: false,
    data: [],
}

export const movieListSlice = createSlice({
    name: 'movie/movieList',
    initialState,
    reducers: {

    },
    extraReducers: (builder => {
        builder.addCase(fetchMovieList.pending, (state) => {
            state.isLoading = true;
            state.error = undefined;
        })
        builder.addCase(fetchMovieList.fulfilled, (state: MoviesList, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(fetchMovieList.rejected, (state) => {
            state.isLoading = false;
            state.error = 'error';
        })
    })

})

export const {actions: movieListActions} = movieListSlice;
export const {reducer: movieListReducer} = movieListSlice;
