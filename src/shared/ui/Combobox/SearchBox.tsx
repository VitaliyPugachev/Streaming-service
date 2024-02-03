import { useState } from 'react'
import { Combobox } from '@headlessui/react'

interface SearchBoxProps {
    values?: string[];
    title?: string;
}

export const SearchBox = (props: SearchBoxProps) => {
    const {
        values,
        title
    } = props;
    const [selected, setSelected] = useState()
    const [query, setQuery] = useState('')

    const filteredValues =
        query === ''
            ? values
            : values?.filter((value) => {
                return value.toLowerCase().includes(query.toLowerCase())
            })

    return (
        <Combobox value={selected} onChange={setSelected}>
            <Combobox.Input onChange={(event) => setQuery(event.target.value)} />
            <Combobox.Options>
                {filteredValues?.map((value) => (
                    <Combobox.Option key={value} value={value}>
                        {value}
                    </Combobox.Option>
                ))}
            </Combobox.Options>
        </Combobox>
    )
}
