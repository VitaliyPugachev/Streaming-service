import {memo, useEffect} from "react";
import {useAppDispatch} from "../../../../shared/lib/hooks/useAppDispatch/useAppDispatch";
import {fetchMovieInfo} from "../../model/services/fetchMovieInfo/fetchMovieInfo";


interface MovieCardProps {

}

export const MovieCard = memo(() => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchMovieInfo('1'))
    }, [])

    return (
        <div>
            <span>{"sad"}</span>
        </div>
    )
})
