import {Meta, Story} from "@storybook/react";
import {ThemeDecorator} from "../../../shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "../../../app/providers/themeProvider/themeContext";
import * as React from "react";
import GenrePage from "./GenrePage";
import {MovieGenre} from "../../../entities/Movie";
import {StoreDecorator} from "../../../shared/config/storybook/StoreDecorator/StoreDecorator";
import {RouterDecorator} from "../../../shared/config/storybook/RouterDecorator/RouterDecorator";

export default {
    title: 'pages/GenrePage',
    component: GenrePage,
    decorators: [StoreDecorator(), RouterDecorator()]
} as Meta;

export const Primary: Story = () => <GenrePage  genre={MovieGenre.ADVENTURES} storybook={true}/>;
Primary.decorators = [ThemeDecorator(Theme.NORMAL)];

export const Dark: Story = () => <GenrePage  genre={MovieGenre.ADVENTURES} storybook={true}/>;
Dark.decorators = [ThemeDecorator(Theme.DARK)];
