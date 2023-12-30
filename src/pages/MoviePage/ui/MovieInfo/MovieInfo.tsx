import cls from './MovieInfo.module.scss';
import {memo, useCallback, useEffect} from "react";
import {useAppDispatch} from "../../../../shared/lib/hooks/useAppDispatch/useAppDispatch";
import {fetchMovieInfo} from "../../../../entities/Movie";
import {useSelector} from "react-redux";
import {StateSchema} from "../../../../app/providers/storeProvider/store/store";
import {Loader} from "../../../../shared/ui/Loader/Loader";
import {useParams} from "react-router";
import {useTranslation} from "react-i18next";
import {RatingIcon} from "../../../../shared/ui/RatingIcon/RatingIcon";


const MovieInfo = () => {
    const {t} = useTranslation();
    const {id} = useParams<{id: string}>();
    const dispatch = useAppDispatch()
    const isLoading = useSelector((state: StateSchema) => state.movieInfoPage?.isLoading)
    const movie = useSelector((state: StateSchema) => state.movieInfoPage?.data)

    useEffect(() => {
        if (id) {
            dispatch(fetchMovieInfo(id))
        }
    }, [])

    const renderInfoItems = useCallback((itemsArray: string[] | undefined) => {
        if (itemsArray === undefined) {
            return ''
        }
        if (itemsArray.length > 1 ) {
            return (
                itemsArray.join(', ')
            )
        } else {
            return itemsArray.toString()
        }
    },[])

    if (isLoading) {
        return (<Loader/>)
    }

    return (
        <div className={cls.MovieInfo}>
            <div className={cls.infoWrapper}>
                <div className={cls.poster}>
                    <img src={movie.poster} alt={movie.title}/>
                </div>
                <div className={cls.description}>
                    <div className={cls.title}>
                        <h2>{movie.title}</h2>
                        <RatingIcon rating={movie?.rating || 'N/D'}/>
                    </div>
                    <span>{t('Год')}: {movie.year}</span>
                    <span>{t('Режиссер')}: {movie.director}</span>
                    <span>{t('Жанр')}: {renderInfoItems(movie?.genre)}</span>
                    <span>{t('Страна')}: {renderInfoItems(movie?.country)}</span>
                    <span>{t('Актеры')}: {renderInfoItems(movie?.actors)}</span>
                    <span>{t('Описание')}: {movie?.description}</span>
                </div>
            </div>
        </div>
    )

}

export default MovieInfo;
