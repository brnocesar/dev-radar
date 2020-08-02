import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND_API}/categories`;

function baseRequest(queryParam, requestParams = {}) {
  return fetch(`${URL_CATEGORIES}${queryParam}`, requestParams)
    .then(async (response) => {
      if (response.ok) {
        const result = await response.json();
        return result;
      }

      throw new Error('Não foi possível pegar os dados :/');
    });
}

function getAll() {
  return baseRequest('');
}

function getAllWithVideos() {
  return baseRequest('?_embed=videos');
}

function create(category) {
  return baseRequest('', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(category),
  });
}

export default {
  getAllWithVideos,
  getAll,
  create,
};
