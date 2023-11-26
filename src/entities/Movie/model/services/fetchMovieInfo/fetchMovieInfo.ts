import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMovieInfo = createAsyncThunk<any, string>(
    'movie.ts/fetchMovieById',
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
