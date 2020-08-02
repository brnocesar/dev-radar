const URL_BACKEND_API = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://brnoflix.herokuapp.com';
// const URL_BACKEND_API = 'https://brnoflix.herokuapp.com';

export default {
  URL_BACKEND_API,
};
