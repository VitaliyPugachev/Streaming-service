import {useSelector} from "react-redux";
import {StateSchema} from "../../../app/providers/storeProvider/store/store";
import {useEffect} from "react";
import {useAppDispatch} from "../../../shared/lib/hooks/useAppDispatch/useAppDispatch";
import {fetchMovieList} from "../../../entities/Movie/model/services/fetchMovieList/fetchMovieList";
import {MoviesSelection} from "../../../entities/Movie/ui/MoviesSelection/MoviesSelection";
import cls from './MainPage.module.scss';

export function MainPage() {

    const {isLoading, error, data} = useSelector((state: StateSchema )=> state.movieList)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchMovieList());
    },[])

    return (
        <div className={cls.MainPage}>
            <MoviesSelection isLoading={isLoading} error={error} moviesList={data}/>
        </div>
    );
}
