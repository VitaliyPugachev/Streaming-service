import cls from './MoviesSelection.module.scss';
import {MoviesList} from "../../model/types/moviesList";
import {MovieCardSchema} from "../../model/types/movieCard";
import {MovieSectionItem} from "../MovieSectionItem/MovieSectionItem";
import {Loader} from "../../../../shared/ui/Loader/Loader";

interface MoviesSelectionProps {
    moviesList?: MovieCardSchema[];
    isLoading?: boolean;
    error?: string;
}

export const MoviesSelection = (props: MoviesSelectionProps) => {
    const {
        moviesList,
        isLoading,
        error
    } = props;

    if (!moviesList) {
        return (
            <div>
                Not Found
            </div>
        )
    }

    if (isLoading) {
        return (
            <Loader/>
        )
    }


    return (
        <div className={cls.MoviesSelection}>
            {moviesList.map((movie) => (
                <MovieSectionItem movie={movie}/>
            ))}
        </div>
    )
}
