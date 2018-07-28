import nock from 'nock';

import httpRequest from '../../../src/services/httpRequest';
import teamsListExpectedData from '../../fixtures/httpResponses/teamsList'

describe('httpRequest', () => {
  describe('.get', () => {
    it('returns the data from the http endpoint', async () => {
      // given
      nock('http://mock-api.com.br')
        .get('/teams')
        .reply(200, teamsListExpectedData);
      // when
      const data = await httpRequest.get('http://mock-api.com.br/teams');
      // then
      expect(data).toEqual(teamsListExpectedData);
    });

    it('returns an error when the http endpoint doesnt exists', async () => {
      // given
      const expectedError = { message: 'some error occurred' };
      const expectedHttpStatus = 500;
      nock('http://mock-api.com.br')
        .get('/teams')
        .reply(expectedHttpStatus, expectedError);
      // when
      const data = await httpRequest.get('http://mock-api.com.br/teams');
      // then
      expect(data).toEqual({status: expectedHttpStatus, error: expectedError});
    });
  });
});
