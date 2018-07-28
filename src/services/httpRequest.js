const axios = require('axios');

async function get(url) {
  try {
    const response = await axios.get(url);

    return response.data;
  } catch ({ response }) {
    return {
      status: response.status,
      error: response.data,
    };
  }
}

const httpRequest = {
  get,
};

export default httpRequest;
