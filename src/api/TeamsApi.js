const teamsApiUrl = 'http://private-c09d5b-worldcup20181.apiary-mock.com/teams';

async function getAll() {
  try {
    const response = await fetch(teamsApiUrl);
    const responseJson = await response.json();

    return responseJson;
  } catch (error) {
    console.error(error);
  }
}

const teamsApi = {
  getAll,
};

export default teamsApi;
