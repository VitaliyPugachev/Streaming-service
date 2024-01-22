import {memo, ReactNode} from "react";
import cls from './Page.module.scss';

interface PageProps {
    children: ReactNode
}

export const Page = memo((props: PageProps) => {
    const {children} = props;
    return (
        <div className={cls.Page}>
            {children}
        </div>
    )
})
