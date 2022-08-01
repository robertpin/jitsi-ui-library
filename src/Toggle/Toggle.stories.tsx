import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Toggle from './Toggle';

export default {
  title: 'Jitsi UI/Toggle',
  component: Toggle,
  argTypes: { onChange: { action: 'change'}}
} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = (args) => {
  const [checked, setChecked] = useState(false);
  return (
    <div style={{ width: '300px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI"' }}>
      <Toggle {...args} checked={checked} onChange={setChecked} />
    </div>
  )
};

export const Default = Template.bind({});
Default.args = {
  disabled: false,
};
