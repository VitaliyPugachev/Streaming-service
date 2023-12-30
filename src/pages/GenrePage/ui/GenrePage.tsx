import {memo, useEffect} from "react";
import cls from './GenrePage.module.scss';
import {MovieGenre, MoviesSelection} from "../../../entities/Movie";
import {useSelector} from "react-redux";
import {useAppDispatch} from "../../../shared/lib/hooks/useAppDispatch/useAppDispatch";
import {StateSchema} from "../../../app/providers/storeProvider/store/store";
import {fetchMovieListByGenre} from "../model/services/fetchMovieListByGenre/fetchMovieListByGenre";

interface GenrePageProps {
    genre: MovieGenre
}

const GenrePage = memo((props: GenrePageProps) => {
    const {
        genre
    } = props;

    const dispatch = useAppDispatch();
    const {isLoading, error, data} = useSelector((state: StateSchema) => state.movieListByGenre);

    useEffect(() => {
        dispatch(fetchMovieListByGenre(genre))
    }, [genre]);

    return (
        <div className={cls.GenrePage}>
            <MoviesSelection isLoading={isLoading} error={error} title={genre} moviesList={data}/>
        </div>
    )
})


export default GenrePage;
