import { memo, useContext } from 'react';
import { Theme, ThemeContext } from 'app/providers/themeProvider/themeContext';
import { ReactComponent as DayIcon } from 'shared/assets/icons/DayTheme.svg';
import { ReactComponent as NightIcon } from 'shared/assets/icons/DarkTheme.svg';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  themeProp?: Theme;
}

export const ThemeSwitcher = memo(({ themeProp }: ThemeSwitcherProps) => {
    const { theme, setTheme } = useContext(ThemeContext);
    const iconWidth = 60;

    const switchTheme = () => {
        if (setTheme) {
            setTheme(theme === Theme.NORMAL ? Theme.DARK : Theme.NORMAL);
        }
    };

    const currentTheme = themeProp || theme;

    return (
        <div
            className={cls.ThemeSwitcher}
            onClick={() => switchTheme()}
        >
            {currentTheme === Theme.NORMAL ? (
                <DayIcon width={iconWidth} height={iconWidth / 2} />
            ) : (
                <NightIcon width={iconWidth} height={iconWidth / 2} />
            )}
        </div>
    );
});
