import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/themeProvider/themeContext';
import {Navbar} from "./Navbar";
import {StoreDecorator} from "../../../shared/config/storybook/StoreDecorator/StoreDecorator";


export default {
    title: 'widgets/Navbar',
    component: Navbar,
    decorators: [StoreDecorator()]
} as Meta;


export const Primary: Story = () => (<Navbar />);
Primary.decorators = [ThemeDecorator(Theme.NORMAL)];

export const Dark: Story = () => <Navbar />;
Dark.decorators = [ThemeDecorator(Theme.DARK)];
