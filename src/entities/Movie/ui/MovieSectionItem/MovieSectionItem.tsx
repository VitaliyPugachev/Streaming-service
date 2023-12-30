import cls from './MovieSectionItem.module.scss';
import {MovieCardSchema} from "../../model/types/movieCard";
import {RatingIcon, RatingPosition} from "../../../../shared/ui/RatingIcon/RatingIcon";
import {memo, useCallback, useState} from "react";
import {NavLink} from "react-router-dom";
import Link from "../../../../shared/ui/Link/Link";

interface MovieSectionItemProps {
    movie: MovieCardSchema
}

export const MovieSectionItem = memo(({movie}: MovieSectionItemProps) => {

    const [isHover, setIsHover] = useState<boolean>(false);

    const onMouseEnter = useCallback(() => {
        setIsHover(true)
    },[isHover])

    const onMouseLeave = useCallback(() => {
        setIsHover(false)
    },[isHover])

    return (
        <Link to={`/movies/${movie.id}`}>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                className={cls.MoviesSelectionItem}
            >
                <div className={cls.imageWrapper}>
                    <img src={movie.poster} alt={movie.title} className={cls.img}/>
                    <RatingIcon rating={movie.rating || 'N/D'} position={RatingPosition.ABSOLUTE} top={10} right={10} className={cls.rating}/>
                </div>
                <div className={cls.description}>
                    <div className={cls.title}>
                        {
                            (movie.title?.length || 'Untitled') > 20 && !isHover ? movie.title?.substring(0, 18) + '...' : movie.title
                        }
                    </div>
                    <div className={cls.year}>{`(${movie.year})`}</div>
                </div>
            </div>
        </Link>
    )
});
