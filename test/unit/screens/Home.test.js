import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import HomeScreen from '../../../src/screens/Home';
import TeamsList from '../../../src/components/TeamsList';


describe('HomeScreen', () => {
  describe('render', () => {
    it('show TeamsList component', () => {
      // given
      const shallowRenderer = new ShallowRenderer();
      // when
      shallowRenderer.render(<HomeScreen />);
      const result = shallowRenderer.getRenderOutput();
      // then
      expect(result.props.children).toEqual(<TeamsList />);
      expect(result).toMatchSnapshot();
    });
  });
});
