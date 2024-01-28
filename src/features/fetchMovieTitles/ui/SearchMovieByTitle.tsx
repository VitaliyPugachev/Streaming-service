import {memo, useCallback, useEffect} from "react";
import {Search} from "../../../shared/ui/Search/Search";
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

    const changeHandler = useCallback((query?: string) => {
        if (query) {
            const results = moviesTitles?.filter(title => title.toLowerCase().includes(query.toLowerCase()));
            console.log(results);
        }
    }, []);

    const clickHandler = useCallback(() => {

    }, [])

    return (
        <>
            <Search
                onChange={changeHandler}
                onSearchClick={clickHandler}
            />
        </>
    )
})
