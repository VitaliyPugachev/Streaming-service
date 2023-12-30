

export interface MovieCardSchema {
    id: string;
    title: string;
    poster?: string;
    year?: string;
    genre?: string[];
    director?: string;
    country?: string[];
    actors?: string[];
    description?: string;
    rating?: string;
}
