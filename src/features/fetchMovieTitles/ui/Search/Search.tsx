import { ReactComponent as SearchIcon } from 'shared/assets/icons/search.svg';
import {FormEvent, memo} from 'react';
import cls from './Search.module.scss';
import { Input } from '../../shared/ui/Input/Input';
import {SearchBox} from "../../shared/ui/Combobox/SearchBox";

interface SearchProps {
    onChange?: (value: string) => void
    onSearchClick?: () => void;
    values?: string[]
}

export const Search = memo((props: SearchProps) => {
    const {
        onChange,
        onSearchClick,
        values
    } = props;

    return (
        <div className={cls.Search}>
            <SearchBox values={values}/>
            <button onClick={onSearchClick} className={cls.btn}>
                <SearchIcon width={25}/>
            </button>
        </div>
    )
});
