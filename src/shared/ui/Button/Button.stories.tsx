import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/themeProvider/themeContext';
import {Button} from "./Button";

export default {
    title: 'shared/Button',
    component: Button,
    decorators: [(Story) => (<div style={{padding: '10px'}}><Story/></div>)]
} as Meta;

export const Primary: Story = (args) => <Button {...args} />;
Primary.decorators = [ThemeDecorator(Theme.NORMAL)];
Primary.args = {
    text: 'TEST'
}

export const Dark: Story = (args) => <Button {...args} />;
Dark.decorators = [ThemeDecorator(Theme.DARK)];
Dark.args = {
    text: 'TEST'
}
