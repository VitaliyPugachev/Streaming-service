import {StateSchema} from "../../../../app/providers/storeProvider/store/store";


export const getMovieTitles = (state: StateSchema) => state.movieTitles.titles;
