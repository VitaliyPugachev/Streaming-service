import { ReactComponent as SearchIcon } from 'shared/assets/icons/search.svg';
import { memo } from 'react';
import cls from './Search.module.scss';
import { Input } from '../Input/Input';

export const Search = memo(() => (
    <div className={cls.Search}>
        <Input placeholder="Поиск" />
        <SearchIcon width={25 } />
    </div>
));
