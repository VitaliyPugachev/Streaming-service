import cls from './Input.module.scss';
import {ChangeEvent, FormEvent, useCallback, useState} from "react";

export interface InputProps {
  disabled?: boolean;
  placeholder?: string;
  onChange?: (value: string) => void
}

export function Input(props: InputProps) {
    const {
        disabled = false,
        placeholder = '',
        onChange,
    } = props;


    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.value && onChange) {
            onChange(e.currentTarget.value);
        }
    };

    return (
        <input
            className={cls.input}
            disabled={disabled}
            placeholder={placeholder}
            onChange={onChangeHandler}
        />
    );
}
