import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/themeProvider/themeContext';
import { Input } from './Input';

export default {
    title: 'shared/Input',
    component: Input,
} as Meta;

export const Primary: Story = () => <Input />;
Primary.decorators = [ThemeDecorator(Theme.NORMAL)];

export const Dark: Story = () => <Input />;
Dark.decorators = [ThemeDecorator(Theme.DARK)];
