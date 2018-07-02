import httpRequest from '../services/httpRequest';

const teamsApiUrl = 'http://private-c09d5b-worldcup20181.apiary-mock.com/teams';

function getAll() {
  return httpRequest.get(teamsApiUrl);
}

function get(teamCode) {
  return httpRequest.get(`${teamsApiUrl}/${teamCode}`);
}

const teamsApi = {
  getAll,
  get,
};

export default teamsApi;
