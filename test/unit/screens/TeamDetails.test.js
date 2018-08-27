import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { ActivityIndicator} from 'react-native';
import nock from 'nock';

import TeamDetailsScreen from '../../../src/screens/TeamDetails';
import TeamDetails from '../../../src/components/TeamDetails';
import brazilMock from '../../fixtures/teams/brazil.json';

const asyncFlush = () => new Promise(resolve => setTimeout(resolve, 100));

describe('TeamDetailsScreen', () => {
  describe('render', () => {
    it('show ActivityIndicator component while team details is not loaded yet', () => {
      // given
      const shallowRenderer = new ShallowRenderer();
      const mockNavigation = {
        state: {
          params: { teamCode: 'BRA' },
        },
      };
      const expectedComponent = <ActivityIndicator
        animating={true} color="#0000ff" hidesWhenStopped={true} size="large"
      />;
      // when
      shallowRenderer.render(<TeamDetailsScreen navigation={mockNavigation}/>);
      const result = shallowRenderer.getRenderOutput();
      // then
      expect(result.props.children).toEqual(expectedComponent);
      expect(result).toMatchSnapshot();
    });

    it('show TeamDetails component when team details is loaded', async() => {
      // given
      const teamCode = 'BRA';
      const mockNavigation = {
        state: {
          params: { teamCode },
        },
      };
      nock('http://private-c09d5b-worldcup20181.apiary-mock.com')
        .get(`/teams/${teamCode}`)
        .reply(200, brazilMock);
      const shallowRenderer = new ShallowRenderer();
      // when
      shallowRenderer.render(<TeamDetailsScreen navigation={mockNavigation}/>);
      const instance = shallowRenderer.getMountedInstance();

      instance.componentDidMount();
      await asyncFlush();

      const result = shallowRenderer.getRenderOutput();
      const instanceRenderedType = instance.render().type;
      // then
      expect(instanceRenderedType).toEqual(TeamDetails);
      expect(result).toMatchSnapshot();
    });
  });
});
