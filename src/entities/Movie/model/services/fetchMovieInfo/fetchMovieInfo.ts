import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {MovieCardSchema} from "../../types/movieCard";

export const fetchMovieInfo = createAsyncThunk<MovieCardSchema, string>(
    'movie.ts/fetchMovieById.ts',
    async (id) => {

        try {
            const response = await axios.get(`http://localhost:4000/movies/${id}`);

            if (!response) {
                console.log('fetching error')
            }

            return response.data;
        } catch (e) {
            console.log('Async Thunk error');
        }
    }
    )
