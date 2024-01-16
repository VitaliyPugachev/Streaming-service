import {RouterDecorator} from "../../../../shared/config/storybook/RouterDecorator/RouterDecorator";
import {Meta, Story} from "@storybook/react";
import {ThemeDecorator} from "../../../../shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "../../../../app/providers/themeProvider/themeContext";
import * as React from "react";
import {StoreDecorator} from "../../../../shared/config/storybook/StoreDecorator/StoreDecorator";
import MovieInfo from "./MovieInfo";

export default {
    title: 'pages/MovieInfo',
    component: MovieInfo,
    decorators: [RouterDecorator(), StoreDecorator()]
} as Meta;

export const Primary: Story = () => <MovieInfo/>;
Primary.decorators = [ThemeDecorator(Theme.NORMAL)];

export const Dark: Story = () => <MovieInfo/>;
Dark.decorators = [ThemeDecorator(Theme.DARK)];
