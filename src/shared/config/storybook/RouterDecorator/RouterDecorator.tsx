import {ReactNode} from "react";
import {MemoryRouter} from "react-router";
import * as React from "react";


export const RouterDecorator = () => (Story: any) => (
    <MemoryRouter>
        <Story />
    </MemoryRouter>
)
