import {createAsyncThunk} from "@reduxjs/toolkit";
import {MovieCardSchema} from "../../../../entities/Movie";
import axios from "axios";


export const fetchMovieTitles = createAsyncThunk(
    'features/fetchMovieTitles',
    async () => {

        try {
            const response = await axios.get<MovieCardSchema[]>(`http://localhost:4000/movies`);

            if (!response) {
                console.log('fetchMovieTitles fetching error')
            }

            const titles: string[] = [];

            response.data.forEach(movie => {
                titles.push(movie.title);
            })

            return titles;
        } catch (e) {
            console.log('Async Thunk error');
        }
    }
)
