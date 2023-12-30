import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/themeProvider/themeContext';
import {Sidebar} from "./Sidebar";
import {RouterDecorator} from "../../../../shared/config/storybook/RouterDecorator/RouterDecorator";

export default {
    title: 'widgets/Sidebar',
    component: Sidebar,
} as Meta;

export const Primary: Story = () => RouterDecorator(<Sidebar />)
Primary.decorators = [ThemeDecorator(Theme.NORMAL)];

export const Dark: Story = () => RouterDecorator(<Sidebar />);
Dark.decorators = [ThemeDecorator(Theme.DARK)];
