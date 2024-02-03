import {createSlice} from "@reduxjs/toolkit";
import {fetchMovieTitles} from "../services/fetchMovieTitles";
import {MovieTitles} from "../types/titleSchema";

const initialState: MovieTitles = {
    titles: []
}

export const movieTitles = createSlice({
    name: 'movie/movieListByGenre',
    initialState,
    reducers: {

    },
    extraReducers: (builder => {
        builder.addCase(fetchMovieTitles.fulfilled, (state, action) => {
            state.titles = action.payload
        })
    })

})

export const {actions: movieTitlesActions} = movieTitles;
export const {reducer: movieTitlesReducer} = movieTitles;
