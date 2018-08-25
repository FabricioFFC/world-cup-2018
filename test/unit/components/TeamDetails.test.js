import React from 'react';
import renderer from 'react-test-renderer';
import humps from 'humps';

import TeamDetails from '../../../src/components/TeamDetails';
import brazilMock from '../../fixtures/teams/brazil.json';

const brazilTeam = humps.camelizeKeys(brazilMock);

describe('TeamDetails', () => {
  describe('render', () => {
    it('show the team details components with team image, stats and players', () => {
      // given
      const expectedStatDescription = 'Ranking na FIFA';
      // when
      const teamDetailsRendered = renderer.create(<TeamDetails team={brazilTeam} />);
      const teamDetailsRenderedAsJSON = teamDetailsRendered.toJSON();
      const teamDetailsRenderedAsString = JSON.stringify(teamDetailsRenderedAsJSON);
      // then
      expect(teamDetailsRenderedAsString.includes(brazilTeam.profileImage)).toBe(true);
      expect(teamDetailsRenderedAsString.includes(expectedStatDescription)).toBe(true);
      brazilTeam.players.forEach(player => {
        expect(teamDetailsRenderedAsString.includes(player.name)).toBe(true);
      });
      expect(teamDetailsRenderedAsJSON).toMatchSnapshot();
    });

    describe('exception cases', () => {
      it('render components even when team prop is undefined', () => {
        // given
        const expectedStatDescription = 'Ranking na FIFA';
        // when
        const teamDetailsRendered = renderer.create(<TeamDetails />);
        const teamDetailsRenderedAsJSON = teamDetailsRendered.toJSON();
        const teamDetailsRenderedAsString = JSON.stringify(teamDetailsRenderedAsJSON);
        // then
        expect(teamDetailsRenderedAsString.includes(expectedStatDescription)).toBe(true);
        expect(teamDetailsRenderedAsString.includes(brazilTeam.profileImage)).toBe(false);
        expect(teamDetailsRenderedAsJSON).toMatchSnapshot();
      });

      it('render components even when team dont have players', () => {
        // given
        const expectedStatDescription = 'Ranking na FIFA';
        let teamWithoutPlayers = Object.assign(brazilTeam)
        teamWithoutPlayers.players = [];
        // when
        const teamDetailsRendered = renderer.create(<TeamDetails team={teamWithoutPlayers} />);
        const teamDetailsRenderedAsJSON = teamDetailsRendered.toJSON();
        const teamDetailsRenderedAsString = JSON.stringify(teamDetailsRenderedAsJSON);
        // then
        expect(teamDetailsRenderedAsString.includes(brazilTeam.profileImage)).toBe(true);
        expect(teamDetailsRenderedAsString.includes(expectedStatDescription)).toBe(true);
        brazilTeam.players.forEach(player => {
          expect(teamDetailsRenderedAsString.includes(player.name)).toBe(false);
        });
        expect(teamDetailsRenderedAsJSON).toMatchSnapshot();
      });
    });
  });
});
