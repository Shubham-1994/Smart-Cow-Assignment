import React from 'react';

import { Label } from './Label';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'SmartCow/Label',
  component: Label,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const DefaultLabel = (args) => <Label label='Email address' color="#000000" {...args} />;

