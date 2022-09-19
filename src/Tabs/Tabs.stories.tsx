import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {action} from '@storybook/addon-actions';

import Tabs from './Tabs';

export default {
  title: 'Jitsi UI/Tabs',
  component: Tabs,
  argTypes: { onChange: { action: 'change'}}
} as ComponentMeta<typeof Tabs>;

const tabs = [
  { id: 'chat', label: 'Chat', accessibilityLabel: 'Chat'},
  { id: 'polls', label: 'Polls', accessibilityLabel: 'Polls'}
];

const tabs2 = [
  { id: 'chat', label: 'Chat', accessibilityLabel: 'Chat', countBadge: 3 },
  { id: 'polls', label: 'Polls', accessibilityLabel: 'Polls' }
]

const Template: ComponentStory<typeof Tabs> = (args) => {
  const [selected, setSelected] = useState('chat');
  return (
    <div style={{ width: '300px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI"' }}>
      <Tabs {...args} selected={selected} onChange={(id) => {
        setSelected(id);
        action('change')(id);
      }} />
    </div>
  )
};

export const Default = Template.bind({});
Default.args = {
  accessibilityLabel: 'Chat Tabs',
  tabs: tabs
};

export const WithBadge = Template.bind({});
WithBadge.args = {
  accessibilityLabel: 'Chat Tabs',
  tabs: tabs2
};

