import {memo} from "react";
import cls from './Button.module.scss';

export enum ButtonSize {
    S = 'small',
    M = 'medium',
    L = 'large'
}

const ButtonClasses = {
    [ButtonSize.S]: cls.small,
    [ButtonSize.M]: cls.medium,
    [ButtonSize.L]: cls.large,
}

interface ButtonProps {
    text?: string;
    size?: ButtonSize
    onClick?: () => void
}

export const Button = memo((props: ButtonProps) => {
    const {
        text = 'click',
        size = ButtonSize.M,
        onClick
    } = props;

    return (
        <button
            type={'button'}
            onClick={onClick}
            className={`${cls.Button} ${ButtonClasses[size]}`}
        >
            {text}
        </button>
    )
})
