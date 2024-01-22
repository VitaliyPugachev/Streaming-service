import {memo, useCallback} from "react";
import {MovieCardSchema} from "../../model/types/movieCard";
import {RatingIcon} from "shared/ui/RatingIcon/RatingIcon";
import {useTranslation} from "react-i18next";
import cls from './MovieCard.module.scss';
import {Button, ButtonSize} from "../../../../shared/ui/Button/Button";


interface MovieCardProps {
    movie: MovieCardSchema
}


export const MovieCard = memo((props: MovieCardProps) => {
    const { movie } = props;
    const { t } = useTranslation();

    const backButtonHandler = useCallback(() => {
        window.history.back()
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

    return (
        <div className={cls.MovieInfo} key={movie?.id}>
            <Button text={t('Назад')} onClick={backButtonHandler}/>
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
})
