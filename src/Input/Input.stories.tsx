import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Input from './Input';
import { IconSearch } from '../icons/svg';

export default {
  title: 'Jitsi UI/Input',
  component: Input,
  argTypes: { onChange: { action: 'change'}}
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => {
  const [value, setValue] = useState('');
  return (
    <div style={{ width: '300px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI"' }}>
      <Input {...args} value={value} onChange={(e) => setValue(e)} />
    </div>
  )
};

export const Empty = Template.bind({});
Empty.args = {
  label: 'Text input label',
  placeholder: 'Placeholder text',
  bottomLabel: 'Optional help message',
  disabled: false,
  error: false,
  type: 'text',
  clearable: false
};

export const Clearable = Template.bind({});
Clearable.args = {
  label: 'Text input label',
  placeholder: 'Placeholder text',
  disabled: false,
  error: false,
  type: 'text',
  clearable: true
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: 'Text input label',
  placeholder: 'Placeholder text',
  disabled: false,
  error: false,
  type: 'text',
  icon: IconSearch
};