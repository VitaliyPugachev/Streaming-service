import cls from './MoviesSelection.module.scss';
import {MovieCardSchema} from "../../model/types/movieCard";
import {MovieSectionItem} from "../MovieSectionItem/MovieSectionItem";
import {Loader} from "../../../../shared/ui/Loader/Loader";

interface MoviesSelectionProps {
    moviesList?: MovieCardSchema[];
    isLoading?: boolean;
    error?: string;
    title?: string
}

export const MoviesSelection = (props: MoviesSelectionProps) => {
    const {
        moviesList,
        isLoading,
        error,
        title
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
        <div data-testid="movieSelection" key={title}>
            {title && (<title className={cls.title}>{title}</title>)}
            <div className={cls.MoviesSelection}>
                {moviesList.map((movie) => (
                    <MovieSectionItem movie={movie}/>
                ))}
            </div>
        </div>
    )
}
