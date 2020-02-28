import { configure, addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import { withStyles } from './decorators/withStyles';

// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.tsx$/), module);
// Global Styles
addDecorator(withStyles);
addDecorator(withA11y);
addDecorator(withKnobs);
