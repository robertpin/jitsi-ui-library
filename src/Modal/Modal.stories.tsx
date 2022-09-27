import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {action} from '@storybook/addon-actions';

import Modal from './Modal';
import Button from '../Button/Button';
import Input from '../Input/Input';

export default {
  title: 'Jitsi UI/Modal',
  component: Modal,
  parameters: {
    backgrounds: {
      default: 'light'
    }
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
  const [open, setOpen] = useState(true);
  const [value, setValue] = useState('');
  return (
    <div style={{ width: '300px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI"' }}>
      <Button accessibilityLabel='Open modal' text='Open modal' onClick={() => setOpen(true)} />
      {open && <Modal {...args} onCancel={() => {
        setOpen(false);
        action('onCancel')();
      }}>
        <p style={{ color: 'white', marginTop: 0 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <Input label='Text input label' value={value} onChange={setValue} />
        <br />
      </Modal>}
    </div>
  )
};

export const Default = Template.bind({});
Default.args = {
  title: 'Modal title',
  cancelKey: 'Cancel',
  ok: {
    key: 'Submit',
    disabled: false
  }
};

export const LongTitle = Template.bind({});
LongTitle.args = {
  title: 'A very long title for a modal dialog, which spans 2 on lines',
  ok: {
    key: 'Submit',
    disabled: true
  }
};

const ScrollTemplate: ComponentStory<typeof Modal> = (args) => {
  const [open, setOpen] = useState(true);
  return (
    <div style={{ width: '300px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI"' }}>
      <Button accessibilityLabel='Open modal' text='Open modal' onClick={() => setOpen(true)} />
      {open && <Modal {...args} onCancel={() => {
        setOpen(false);
        action('onCancel')();
      }}>
        <p style={{ color: 'white', marginTop: 0 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <img style={{width: '100%'}} src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Big_Ben%2C_Londres%2C_Inglaterra%2C_2014-08-11%2C_DD_205.JPG" alt="Big Ben" />
      </Modal>}
    </div>
  )
};

export const ScrollingContent = ScrollTemplate.bind({});
ScrollingContent.args = {
  title: 'Modal title',
  cancelKey: 'Cancel',
  ok: {
    key: 'Submit',
    disabled: false
  }
}

