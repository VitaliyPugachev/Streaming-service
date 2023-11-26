import {createSlice} from "@reduxjs/toolkit";
import {fetchMovieInfo} from "../services/fetchMovieInfo/fetchMovieInfo";
import {Movie} from "../types/movie";


const initialState: Movie = {
    error: '',
    isLoading: false,
    data: {},
}

export const movieSlice = createSlice({
    name: 'movie/movieItem',
    initialState,
    reducers: {

    },
    extraReducers: (builder => {
        builder.addCase(fetchMovieInfo.pending, (state) => {
            state.isLoading = true;
            state.error = undefined;
        })
        builder.addCase(fetchMovieInfo.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(fetchMovieInfo.rejected, (state) => {
            state.isLoading = false;
            state.error = 'error';
        })
    })

})

export const {actions: movieActions} = movieSlice;
export const {reducer: movieReducer} = movieSlice;
