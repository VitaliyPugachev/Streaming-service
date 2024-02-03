import {memo, useEffect} from "react";
import {Search} from "../../Search/Search";
import {useAppDispatch} from "../../../shared/lib/hooks/useAppDispatch/useAppDispatch";
import {fetchMovieTitles} from "../model/services/fetchMovieTitles";
import {useSelector} from "react-redux";
import {getMovieTitles} from "../model/selectors/getMovieTitles";


export const SearchMovieByTitle = memo(() => {
    const dispatch = useAppDispatch();
    const moviesTitles = useSelector(getMovieTitles);

    useEffect(() => {
        dispatch(fetchMovieTitles());
    }, [])


    return (
        <>
            <Search values={moviesTitles}/>
        </>
    )
})
