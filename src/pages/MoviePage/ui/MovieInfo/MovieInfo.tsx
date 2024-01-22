import {memo, useEffect} from "react";
import {useAppDispatch} from "../../../../shared/lib/hooks/useAppDispatch/useAppDispatch";
import {fetchMovieInfo} from "../../../../entities/Movie";
import {useSelector} from "react-redux";
import {StateSchema} from "../../../../app/providers/storeProvider/store/store";
import {Loader} from "../../../../shared/ui/Loader/Loader";
import {useParams} from "react-router";
import {MovieCard} from "../../../../entities/Movie/ui/MovieCard/MovieCard";


const MovieInfo = memo(() => {
    const {id} = useParams<{id: string}>();
    const dispatch = useAppDispatch()
    const isLoading = useSelector((state: StateSchema) => state.movieInfoPage?.isLoading)
    const movie = useSelector((state: StateSchema) => state.movieInfoPage?.data)

    useEffect(() => {
        if (id) {
            dispatch(fetchMovieInfo(id))
        }
    }, [])


    if (isLoading) {
        return (<Loader/>)
    }

    return (
        <MovieCard movie={movie}/>
    )

});

export default MovieInfo;
