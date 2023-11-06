import * as React from "react";
import {Meta, Story} from "@storybook/react";
import {Input} from "./Input";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/themeProvider/themeContext";

export default {
    title: 'shared/Input',
    component: Input,
} as Meta;

export const Primary: Story = (args) => <Input {...args} />;
Primary.args = {};
Primary.decorators = [ThemeDecorator(Theme.NORMAL)];

export const Dark: Story = (args) => <Input {...args} />;
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
