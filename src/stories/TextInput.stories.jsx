import React from 'react';

import { TextInput } from './TextInput';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'SmartCow/TextInput',
  component: TextInput,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Input = (args) => <TextInput {...args} />;

