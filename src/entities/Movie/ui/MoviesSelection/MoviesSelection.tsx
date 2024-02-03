import cls from './MoviesSelection.module.scss';
import {MovieCardSchema} from "../../model/types/movieCard";
import {MovieSectionItem} from "../MovieSectionItem/MovieSectionItem";
import {Loader} from "../../../../shared/ui/Loader/Loader";
import {useRef} from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {CustomRightArrow} from "../../../../shared/ui/CarouselArrows/CarouselArrows";
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 8
    },
    desktop: {
        breakpoint: { max: 3000, min: 1200 },
        items: 6
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 4
    },
    mobile: {
        breakpoint: { max: 800, min: 0 },
        items: 3
    }
};


interface MoviesSelectionProps {
    moviesList?: MovieCardSchema[];
    isLoading?: boolean;
    error?: string;
    title?: string;
    carousel?: boolean
}

export const MoviesSelection = (props: MoviesSelectionProps) => {
    const {
        moviesList,
        isLoading,
        error,
        title,
        carousel = false
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

    if (carousel) {
        return (
            <section className={cls.section}>
                {title && (<h2 className={cls.title}>{title}</h2>)}
                <Carousel responsive={responsive} >
                    {moviesList.map((movie) => (
                        <MovieSectionItem movie={movie} key={movie.title} />
                    ))}
                </Carousel>
            </section>
        )
    }

    return (
        <section data-testid="movieSelection" >
            {title && (<h2 className={cls.title}>{title}</h2>)}
            <div className={cls.MoviesSelection}>
                {moviesList.map((movie) => (
                    <MovieSectionItem movie={movie} key={movie.title} />
                ))}
            </div>
        </section>
    )
}
