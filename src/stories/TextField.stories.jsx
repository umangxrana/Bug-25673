import { fn } from '@storybook/test';
import { TextField } from './TextField';
import { useArgs } from '@storybook/preview-api';
import React,{useState} from 'react';


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
export const UseArgs = () => {
  const [args, setArgs] = useArgs();
  const [value, setValue] = useState(args.value);

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    setArgs({ value: newValue });
  };

  return (
    <TextField
      {...args}
      value={value}
      onChange={handleInputChange}
    />
  );
}

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
