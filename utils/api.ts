import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
});

api.interceptors.request.use(async (config) => {
  const accessToken = localStorage.getItem('accessToken');
  if (!accessToken) return config;
  config.headers = {
    ...config.headers,
    Authorization: `Bearer ${accessToken}`,
  };
  return config;
});

export default api;
