import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';
import { IconCameraEmpty } from '../icons/svg';

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
  disabled: false,
  size: 'medium'
};

export const Icon = Template.bind({});
Icon.args = {
  type: 'primary',
  disabled: false,
  size: 'medium',
  icon: IconCameraEmpty
};

export const IconText = Template.bind({});
IconText.args = {
  text: 'Button',
  type: 'primary',
  disabled: false,
  size: 'medium',
  icon: IconCameraEmpty
}