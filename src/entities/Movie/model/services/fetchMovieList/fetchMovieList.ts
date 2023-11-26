import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {MovieCardSchema} from "entities/Movie/model/types/movieCard";
import {MoviesList} from "../../types/moviesList";

export const fetchMovieList = createAsyncThunk<MovieCardSchema[], void>(
    'movie/fetchMoviesList',
    async () => {

        try {
            const response = await axios.get(`http://localhost:4000/movies`);

            if (!response) {
                console.log('fetching error')
            }

            return response.data;
        } catch (e) {
            console.log('Async Thunk error');
        }
    }
)
