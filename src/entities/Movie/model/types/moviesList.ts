import {MovieCardSchema} from "./movieCard";

export interface MoviesList {
    isLoading?: boolean;
    error?: string;
    data?: MovieCardSchema[];
}
