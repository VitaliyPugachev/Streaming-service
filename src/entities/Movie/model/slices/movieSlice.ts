import {createSlice} from "@reduxjs/toolkit";
import {fetchMovieInfo} from "../services/fetchMovieInfo/fetchMovieInfo";
import {MovieInfo} from "../types/movie";


const initialState: MovieInfo = {
    error: '',
    isLoading: false,
    data: {
        id: '',
        year: '',
        title: '',
    },
}

export const movieSlice = createSlice({
    name: 'movie/movieItem',
    initialState,
    reducers: {

    },
    extraReducers: (builder => {
        builder.addCase(fetchMovieInfo.pending, (state) => {
            state.isLoading = true;
            state.error = '';
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
