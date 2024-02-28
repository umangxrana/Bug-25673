import { fn } from '@storybook/test';
import { TextField } from './TextField';
import { useArgs } from '@storybook/preview-api';
import React from 'react';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Example/TextField',
  component: TextField,
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'text' },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const UseArgs = {
  render: (args) => {
    const [, setArgs] = useArgs();
    return (
      <TextField
        {...args}
        onChange={(e) => setArgs({ value: e.target.value })}
      />
    );
  },
  args: { defaultvalue: 'test' },
};

export const UseArgs2 = {
  render: () => {
    const [args, setArgs] = useArgs();
    return (
      <TextField
        {...args}
        onChange={(e) => setArgs({ value: e.target.value })}
      />
    );
  },
  args: { defaultvalue: 'test' },
};

export const UseState = {
  render: (args) => {
    const [value, setValue] = React.useState('test');
    return (
      <TextField
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
  args: { value: 'test' },
};
