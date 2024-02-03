import { Listbox } from '@headlessui/react'

interface Options {
    value: string;
    unavailable?: boolean
}

interface ListBoxProps {
    value?: string;
    onChange?: () => void;
    options: Options[]
}

export const ListBox = (props: ListBoxProps) => {
    const {
        value = '',
        onChange,
        options
    } = props;

    return (
        <Listbox value={value} onChange={onChange}>
            <Listbox.Button>{value}</Listbox.Button>
            <Listbox.Options>
                {options.map((item) => (
                    <Listbox.Option
                        key={item.value}
                        value={item.value}
                        disabled={item.unavailable}
                    >
                        {item.value}
                    </Listbox.Option>
                ))}
            </Listbox.Options>
        </Listbox>
    )
}
