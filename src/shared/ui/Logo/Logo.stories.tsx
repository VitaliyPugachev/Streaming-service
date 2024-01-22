import * as React from 'react';
import {Meta, Story} from '@storybook/react';
import {Logo} from "./Logo";

export default {
    title: 'shared/Logo',
    component: Logo,
} as Meta;

export const Primary: Story = (args) => <Logo text={''} {...args} />;
Primary.args = {
    text: 'MSH'
}

