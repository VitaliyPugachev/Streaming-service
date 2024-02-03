import {createAsyncThunk} from "@reduxjs/toolkit";
import {MovieCardSchema} from "../../../../entities/Movie";
import axios from "axios";
import {MovieTitles, TitleSchema} from "../types/titleSchema";


export const fetchMovieTitles = createAsyncThunk(
    'features/fetchMovieTitles',
    async () => {

        try {
            const response = await axios.get<MovieCardSchema[]>(`http://localhost:4000/movies`);

            if (!response) {
                console.log('fetchMovieTitles fetching error')
            }

            const titles: TitleSchema[] = [];

            response.data.forEach(movie => {
                titles.push(
                    {
                        title: movie.title,
                        id: movie.id
                    }
                );
            })

            return titles;
        } catch (e) {
            console.log('Async Thunk error');
        }
    }
)
