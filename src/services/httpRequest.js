async function get(url) {
  try {
    const response = await fetch(url);
    const responseJson = await response.json();

    return responseJson;
  } catch (error) {
    console.error(error); /* eslint-disable-line no-console */
    return error;
  }
}

const httpRequest = {
  get,
};

export default httpRequest;
