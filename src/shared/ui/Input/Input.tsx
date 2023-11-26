import cls from './Input.module.scss';

export interface InputProps {
  disabled?: boolean
  placeholder?: string
}

export function Input(props: InputProps) {
    const {
        disabled = false,
        placeholder = '',
    } = props;

    return (
        <input
            className={cls.input}
            disabled={disabled}
            placeholder={placeholder}
        />
    );
}
