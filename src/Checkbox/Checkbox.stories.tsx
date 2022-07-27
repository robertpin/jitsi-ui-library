import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Checkbox from './Checkbox';

export default {
  title: 'Jitsi UI/Checkbox - WIP',
  component: Checkbox,
  argTypes: { onChange: { action: 'change'}}
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => {
  const [checked, setChecked] = useState(false);
  return (
    <div style={{ width: '300px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI"' }}>
      <Checkbox {...args} checked={checked} onChange={(e) => setChecked(e.target.checked)} />
    </div>
  )
};

export const Default = Template.bind({});
Default.args = {
  label: 'Enabled'
};
