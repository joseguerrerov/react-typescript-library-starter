import React from 'react';
import { storiesGroups } from '../../../.storybook/stories';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { Button } from './index';

export const Default = () => (
  <Button onClick={action('onClick')}>
    {text('text', 'Hi Im a Button')}
  </Button>
);

export default {
  title: `${storiesGroups.Global}/Button`,
};
