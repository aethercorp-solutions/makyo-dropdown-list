import React from 'react';
import MultiSelectDropdown from './MultiSelectDropdown';
import './MultiSelectDropdown.css';

export default {
  title: 'Components/MultiSelectDropdown',
  component: MultiSelectDropdown,
  argTypes: {
    multiple: { control: 'boolean' },
    outlined: { control: 'boolean' },
    filtering: { control: 'boolean' },
    usePortal: { control: 'boolean' },
    placeholder: { control: 'text' },
    optionLabel: { control: 'text' },
  },
};

const Template = (args) => <MultiSelectDropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: ['Option 1', 'Option with icon', 'Long Long Option 3', 'Long Long Long Option 4', 'Long Long Long Long Option 5', 'Long Long Long Long Long Option 6'],
  multiple: true,
  outlined: false,
  filtering: true,
  usePortal: false,
  placeholder: 'Select options...',
};

export const WithObjects = Template.bind({});
WithObjects.args = {
  options: [
    { id: 1, name: 'Option 1' },
    { id: 2, name: 'Option with icon' },
    { id: 3, name: 'Long Long Option 3' },
    { id: 3, name: 'Long Long Long Option 4' },
    { id: 3, name: 'Long Long Long Long Option 5' },
    { id: 3, name: 'Long Long Long Long Long Option 6' },
  ],
  multiple: true,
  outlined: true,
  filtering: true,
  optionLabel: 'Label',
  placeholder: 'Select...',
};
