import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchMovieInfo, MovieCardSchema, MovieInfo} from "../../../../entities/Movie";

const initialState: MovieInfo = {
    isLoading: false,
    error: '',
    data: {
        id: '',
        title: ''
    }
}

const movieInfoSlice = createSlice({
    name: 'MoveiPage/MovieInfo',
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder.addCase(fetchMovieInfo.pending, (state) => {
            state.isLoading = true;
            state.error = ''
        })
        builder.addCase(fetchMovieInfo.rejected, (state) => {
            state.isLoading = false;
            state.error = 'error'
        })
        builder.addCase(fetchMovieInfo.fulfilled, (state, action: PayloadAction<MovieCardSchema>) => {
            state.isLoading = false;
            state.error = '';
            state.data = action.payload
        })
    }
})


export const {reducer: movieInfoReducer} = movieInfoSlice;
export const {actions: movieInfoActions} = movieInfoSlice;
