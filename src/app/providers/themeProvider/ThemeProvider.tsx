import {ReactNode, useState} from "react";
import {Theme, ThemeContext} from "./themeContext";


export interface ThemeProviderProps {
    children?: ReactNode
}

const ThemeProvider = ({children} : ThemeProviderProps) => {
    const [theme, setTheme] = useState(Theme.NORMAL);
    const {Provider} = ThemeContext;

    return (
        <Provider value={{theme, setTheme}}>
            {children}
        </Provider>
    )
}

export default ThemeProvider
