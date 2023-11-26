import {MovieCardSchema} from "./movieCard";

export interface Movie {
    isLoading?: boolean;
    error?: string;
    data?: MovieCardSchema
}
