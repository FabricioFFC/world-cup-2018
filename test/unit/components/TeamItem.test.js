import React from 'react';
import renderer from 'react-test-renderer';
import humps from 'humps';
import { TouchableOpacity } from 'react-native';

import TeamItem from '../../../src/components/TeamItem';
import brazilMock from '../../fixtures/teams/brazil.json';

const brazilTeam = humps.camelizeKeys(brazilMock);

describe('TeamItem', () => {
  describe('render', () => {
    it('show the team item component with the team flag and name', () => {
      // given
      const team = {
        code: brazilTeam.code,
        flag: brazilTeam.flag,
        name: brazilTeam.name,
      };
      const navigateMock = jest.fn();
      const navigation = { navigate: navigateMock };
      const expectedScreenToNavigate = 'TeamDetails';
      const expectedParamsToNavigate = { teamCode: team.code };
      // when
      const teamItemRendered = renderer.create(<TeamItem item={team} navigation={navigation}/>);

      teamItemRendered.root.findByType(TouchableOpacity).props.onPress()

      const teamItemRenderedAsJSON = teamItemRendered.toJSON();
      const teamItemRenderedAsString = JSON.stringify(teamItemRenderedAsJSON);
      // then
      expect(teamItemRenderedAsString.includes(team.flag)).toBe(true);
      expect(teamItemRenderedAsString.includes(team.name)).toBe(true);
      expect(navigateMock).toBeCalledWith(expectedScreenToNavigate, expectedParamsToNavigate);
      expect(teamItemRenderedAsJSON).toMatchSnapshot();
    });

    describe('exception cases', () => {
      it('render component even when item prop is undefined', () => {
        // given
        const team = {
          code: brazilTeam.code,
          flag: brazilTeam.flag,
          name: brazilTeam.name,
        };
        const navigateMock = jest.fn();
        const navigation = { navigate: navigateMock };
        const expectedScreenToNavigate = 'TeamDetails';
        const expectedParamsToNavigate = { teamCode: undefined };
        // when
        const teamItemRendered = renderer.create(<TeamItem navigation={navigation}/>);

        teamItemRendered.root.findByType(TouchableOpacity).props.onPress()

        const teamItemRenderedAsJSON = teamItemRendered.toJSON();
        const teamItemRenderedAsString = JSON.stringify(teamItemRenderedAsJSON);
        // then
        expect(teamItemRenderedAsString.includes(team.flag)).toBe(false);
        expect(teamItemRenderedAsString.includes(team.name)).toBe(false);
        expect(navigateMock).toBeCalledWith(expectedScreenToNavigate, expectedParamsToNavigate);
        expect(teamItemRenderedAsJSON).toMatchSnapshot();
      });
    });
  });
});
