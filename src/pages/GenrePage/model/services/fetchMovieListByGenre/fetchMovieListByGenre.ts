import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {MovieCardSchema} from "entities/Movie/model/types/movieCard";

export const fetchMovieListByGenre = createAsyncThunk<MovieCardSchema[], string>(
    'movie/fetchMoviesListByGenre',
    async (genre) => {

        try {
            const response = await axios.get(`http://localhost:4000/movies`, {
                params: {
                    genre_like: genre
                }
            });

            if (!response) {
                console.log('fetching error')
            }

            return response.data;
        } catch (e) {
            console.log('Async Thunk error');
        }
    }
)
