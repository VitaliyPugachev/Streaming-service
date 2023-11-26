import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import { Theme } from 'app/providers/themeProvider/themeContext';
import { ThemeSwitcher } from './ThemeSwitcher';

export default {
    title: 'shared/ThemeSwitcher',
    component: ThemeSwitcher,
} as Meta;

export const Primary: Story = (args) => <ThemeSwitcher {...args} />;
Primary.args = {
    themeProp: Theme.NORMAL,
};

export const Dark: Story = (args) => <ThemeSwitcher {...args} />;
Dark.args = {
    themeProp: Theme.DARK,
};
