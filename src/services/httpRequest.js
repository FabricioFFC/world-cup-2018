import axios from 'axios';
import humps from 'humps';

async function get(url) {
  try {
    const response = await axios.get(url);
    return humps.camelizeKeys(response.data);
  } catch ({ response }) {
    return {
      status: response.status,
      error: humps.camelizeKeys(response.data),
    };
  }
}

const httpRequest = {
  get,
};

export default httpRequest;
