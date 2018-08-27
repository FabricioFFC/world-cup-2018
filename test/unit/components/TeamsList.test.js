import React from 'react';
import renderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';
import { ActivityIndicator, FlatList } from 'react-native';
import nock from 'nock';

import TeamsList from '../../../src/components/TeamsList';
import teamsListExpectedData from '../../fixtures/httpResponses/teamsList'

const asyncFlush = () => new Promise(resolve => setTimeout(resolve, 100));

describe('TeamList', () => {
  describe('render', () => {
    it('show the loading when teams werent load yet', () => {
      // given
      const shallowRenderer = new ShallowRenderer();
      const expectedComponent = <ActivityIndicator
        animating={true} color="#0000ff" hidesWhenStopped={true} size="large"
      />;
      // when
      shallowRenderer.render(<TeamsList />);
      const result = shallowRenderer.getRenderOutput();
      // then
      expect(result).toMatchSnapshot();
      expect(result.props.children).toEqual(expectedComponent);
    });

    it('show teams list when teams are loaded', async() => {
      // given
      nock('http://private-c09d5b-worldcup20181.apiary-mock.com')
        .get('/teams')
        .reply(200, teamsListExpectedData);
      const shallowRenderer = new ShallowRenderer();
      // when
      shallowRenderer.render(<TeamsList />);
      const instance = shallowRenderer.getMountedInstance();

      instance.componentDidMount();
      await asyncFlush();

      const result = shallowRenderer.getRenderOutput();
      const instanceRenderedType = instance.render().type;
      // then
      expect(instanceRenderedType).toEqual(FlatList);
      expect(result).toMatchSnapshot();
    });

    describe('exception cases', () => {
      it('show teams list even when teams is null', async() => {
        // given
        nock('http://private-c09d5b-worldcup20181.apiary-mock.com')
          .get('/teams')
          .reply(200, null);
        const shallowRenderer = new ShallowRenderer();
        // when
        shallowRenderer.render(<TeamsList />);
        const instance = shallowRenderer.getMountedInstance();

        instance.componentDidMount();
        await asyncFlush();

        const result = shallowRenderer.getRenderOutput();
        const instanceRenderedType = instance.render().type;
        // then
        expect(instanceRenderedType).toEqual(FlatList);
        expect(result).toMatchSnapshot();
      });
    });
  });
});
