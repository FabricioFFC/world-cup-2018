const teamsApiUrl = 'http://private-c09d5b-worldcup20181.apiary-mock.com/teams';

async function getAll() {
  try {
    const response = await fetch(teamsApiUrl);
    const responseJson = await response.json();

    return responseJson;
  } catch (error) {
    console.error(error); /* eslint-disable-line no-console */
    return error;
  }
}

async function get(teamCode) {
  try {
    const response = await fetch(`${teamsApiUrl}/${teamCode}`);
    const responseJson = await response.json();

    return responseJson;
  } catch (error) {
    console.error(error); /* eslint-disable-line no-console */
    return error;
  }
}

const teamsApi = {
  getAll,
  get,
};

export default teamsApi;
