import { Theme } from 'app/providers/themeProvider/themeContext';
import ThemeProvider from 'app/providers/themeProvider/ThemeProvider';
import { Story } from '@storybook/react';
import 'app/styles/index.scss';

export const ThemeDecorator = (theme: Theme) => function (StoryComponent: Story) {
    return (
        <ThemeProvider>
            <div className={`App ${theme}`} style={{ display: 'inline-block' }}>
                <StoryComponent />
            </div>
        </ThemeProvider>
    );
};
