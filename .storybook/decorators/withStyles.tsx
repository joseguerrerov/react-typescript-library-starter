import React from 'react';
import { GlobalStyles } from '../../src/Components/GlobalStyles';

export const withStyles = (cb) => (
  <React.Fragment>
    <GlobalStyles />
    {cb()}
  </React.Fragment>
);
