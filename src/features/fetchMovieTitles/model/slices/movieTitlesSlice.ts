import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {MoviesList} from "entities/Movie/model/types/moviesList";
import {fetchMovieTitles} from "../services/fetchMovieTitles";

export interface movieTitles {
    titles: string[] | undefined
}

const initialState: movieTitles = {
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
