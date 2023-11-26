import cls from './RatingIcon.module.scss';
import {CSSProperties} from "react";

export enum RatingPosition {
    ABSOLUTE = 'absolute',
    RELATIVE = 'relative'
}

interface RatingIconProps {
    className?: string
    rating: string;
    position?: RatingPosition;
    left?: number;
    right?: number;
    top?: number;
    bottom?: number;

}

export const RatingIcon = (props: RatingIconProps) => {
    const {
        className,
        rating,
        position = RatingPosition.RELATIVE,
        left = undefined,
        top = undefined,
        right = undefined,
        bottom = undefined
    } = props;

    const styles: CSSProperties = {
        position,
        left,
        right,
        bottom,
        top
    }

    return (
        <div
            style={styles}
            className={`${cls.RatingIcon} ${className}`}
        >
            {rating}
        </div>
    )
}
