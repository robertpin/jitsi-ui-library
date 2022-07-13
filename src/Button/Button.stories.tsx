import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'Jitsi UI/Button',
  component: Button,
  argTypes: { onClick: { action: 'clicked'}}
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Text = Template.bind({});
Text.args = {
  text: 'Button',
  type: 'primary',
  disabled: false
};