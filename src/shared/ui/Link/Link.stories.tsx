import {Search} from "../Search/Search";
import {Meta, Story} from "@storybook/react";
import {ThemeDecorator} from "../../config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "../../../app/providers/themeProvider/themeContext";
import * as React from "react";
import Link from "./Link";
import {RouterDecorator} from "../../config/storybook/RouterDecorator/RouterDecorator";

export default {
    title: 'shared/Link',
    component: Link,
    decorators: [RouterDecorator()]
} as Meta;

export const Primary: Story = () => <Link to={'./'} children={<span>Some text</span>}/>;
Primary.decorators = [ThemeDecorator(Theme.NORMAL)];

export const Dark: Story = () => <Link to={'./'} children={<span>Some text</span>}/>;
Dark.decorators = [ThemeDecorator(Theme.DARK)];
