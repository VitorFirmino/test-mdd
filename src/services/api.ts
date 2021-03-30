import axios from 'axios';

const api = axios.create({
  baseURL: 'https://munddi.com/dev/',
});

export default api;
