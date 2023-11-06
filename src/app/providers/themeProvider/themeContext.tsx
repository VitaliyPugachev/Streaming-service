import {createContext} from "react";

export enum Theme {
    NORMAL = 'normal_theme',
    DARK = 'dark_theme'
}

export interface ThemeContextProps {
    theme?: Theme,
    setTheme?: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextProps>({});
