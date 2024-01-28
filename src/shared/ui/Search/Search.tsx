import { ReactComponent as SearchIcon } from 'shared/assets/icons/search.svg';
import {FormEvent, memo} from 'react';
import cls from './Search.module.scss';
import { Input } from '../Input/Input';

interface SearchProps {
    onChange?: (value: string) => void
    onSearchClick?: () => void;
}

export const Search = memo((props: SearchProps) => {
    const {
        onChange,
        onSearchClick
    } = props;

    return (
        <div className={cls.Search}>
            <Input placeholder="Поиск" onChange={onChange}/>
            <button onClick={onSearchClick} className={cls.btn}>
                <SearchIcon width={25}/>
            </button>
        </div>
    )
});
