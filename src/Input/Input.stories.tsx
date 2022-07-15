import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Input from './Input';

export default {
  title: 'Jitsi UI/Input',
  component: Input,
  argTypes: { onChange: { action: 'change'}}
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => (
  <div style={{ width: '300px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI"' }}>
    <Input {...args} />
  </div>
);

export const Empty = Template.bind({});
Empty.args = {
  label: 'Text input label',
  placeholder: 'Placeholder text',
  bottomLabel: 'Optional help message',
  disabled: false,
  error: false,
  type: 'text'
};