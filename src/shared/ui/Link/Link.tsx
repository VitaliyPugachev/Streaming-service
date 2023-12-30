import React, {ReactNode} from 'react';
import {NavLink} from "react-router-dom";
import cls from './Link.module.scss';

interface LinkProps {
    children?: ReactNode
    to: string
}

function Link({children, to}: LinkProps) {
    return (
        <NavLink to={to} className={cls.Link}>
            {children}
        </NavLink>
    );
}

export default Link;
