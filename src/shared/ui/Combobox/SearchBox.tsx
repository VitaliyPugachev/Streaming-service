import { useState } from 'react'
import { Combobox } from '@headlessui/react'
import cls from './SearchBox.module.scss';
import {NavLink} from "react-router-dom";
import {TitleSchema} from "../../../features/fetchMovieTitles/model/types/titleSchema";
import {RoutePath} from "../../config/routeConfig/routeConfig";
import {log} from "util";

interface SearchBoxProps {
    values?: TitleSchema[];
}

export const SearchBox = (props: SearchBoxProps) => {
    const {
        values
    } = props;
    const [selected, setSelected] = useState('')
    const [query, setQuery] = useState('')

    const filteredValues = values?.filter(({title}) => {
        return title.toLowerCase().includes(query.toLowerCase())
    });

    const onSelect = () => {
        setQuery('');
        setSelected('');
    }

    return (
        <Combobox value={selected} onChange={setSelected} as={'div'} className={cls.SearchBox} >
            <Combobox.Input onChange={(event) => setQuery(event.target.value)} className={cls.input}/>
            {query && (
                <Combobox.Options className={cls.options}>
                    {filteredValues?.map((item) => (
                        <Combobox.Option key={item.id} value={item.title} className={cls.item}>
                            <NavLink to={`${RoutePath.MOVIE_INFO}${item.id}`}>{item.title}</NavLink>
                        </Combobox.Option>
                    ))}
                </Combobox.Options>
            )}
        </Combobox>
    )
}
