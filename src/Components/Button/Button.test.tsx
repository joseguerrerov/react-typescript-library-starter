import React from 'react';
import { shallow } from 'enzyme';
import { Button } from './index';

describe('Button Component', () => {
  describe('Render', () => {
    it('renders', () => {
      const wrapper = shallow((
        <Button onClick={() => null}>
          Test
        </Button>
      ));
      expect(wrapper).toMatchSnapshot();
    });
  });
});
