import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {action} from '@storybook/addon-actions';

import Select from './Select';

export default {
  title: 'Jitsi UI/Select',
  component: Select,
  argTypes: { onChange: { action: 'change'}}
} as ComponentMeta<typeof Select>;

const options = [
  { value: 1, label: 'First First First First First First First Second'},
  {value: 2, label: 'Second'},
  {value: 3, label: 'Third'},
  {value: 4, label: 'Fourth'}
]

const Template: ComponentStory<typeof Select> = (args) => {
  const [value, setValue] = useState<string|number>(1);
  return (
    <div style={{ width: '300px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI"' }}>
      <Select {...args} value={value} onChange={(e) => {
        setValue(e.target.value);
        action('change')(e);
      }} options={options} />
    </div>
  )
};

export const Default = Template.bind({});
Default.args = {
  label: 'Select menu label',
  bottomLabel: 'Optional help message',
  error: false,
  disabled: false
};

