import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/themeProvider/themeContext';
import {RatingIcon} from "./RatingIcon";

export default {
    title: 'shared/RatingIcon',
    component: RatingIcon,
} as Meta;

export const Primary: Story = () => <RatingIcon rating={'8.5'} />;
Primary.decorators = [ThemeDecorator(Theme.NORMAL)];

export const Dark: Story = () => <RatingIcon rating={'8.5'} />;
Dark.decorators = [ThemeDecorator(Theme.DARK)];
