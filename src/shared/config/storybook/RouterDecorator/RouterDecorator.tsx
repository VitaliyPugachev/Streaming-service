import {ReactNode} from "react";
import {MemoryRouter} from "react-router";


export const RouterDecorator = (storyComponent: ReactNode) => (
    <MemoryRouter>
        {storyComponent}
    </MemoryRouter>
)
