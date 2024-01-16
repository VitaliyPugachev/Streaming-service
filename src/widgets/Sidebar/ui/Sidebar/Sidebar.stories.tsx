import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/themeProvider/themeContext';
import {Sidebar} from "./Sidebar";
import {RouterDecorator} from "../../../../shared/config/storybook/RouterDecorator/RouterDecorator";
import {withRouter} from "storybook-addon-react-router-v6";
import {MemoryRouter} from "react-router";

export default {
    title: 'widgets/Sidebar',
    component: Sidebar,
    decorators: [RouterDecorator()]
} as Meta;

export const Primary: Story = () => <Sidebar />
Primary.decorators = [ThemeDecorator(Theme.NORMAL)];

export const Dark: Story = () => <Sidebar />;
Dark.decorators = [ThemeDecorator(Theme.DARK)];
