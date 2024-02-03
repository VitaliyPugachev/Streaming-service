import {RatingIcon} from "../../../../shared/ui/RatingIcon/RatingIcon";
import {Meta, Story} from "@storybook/react";
import {ThemeDecorator} from "../../../../shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "../../../../app/providers/themeProvider/themeContext";
import * as React from "react";
import {Search} from "./Search";

export default {
    title: 'shared/Search',
    component: Search,
} as Meta;

export const Primary: Story = () => <Search />;
Primary.decorators = [ThemeDecorator(Theme.NORMAL)];

export const Dark: Story = () => <Search />;
Dark.decorators = [ThemeDecorator(Theme.DARK)];
