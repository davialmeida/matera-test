import axios from 'axios';

import { getUserFromLocalStorage } from '@/authentication/context';

const productApi = axios.create({
  baseURL: 'http://6256fc506ea7037005434e84.mockapi.io/api/v1',
});

productApi.interceptors.request.use(async (config) => {
  const token = getUserFromLocalStorage().token;

  if (token) {
    config.headers.authorization = `Bearer ${token}`;
  }

  return config;
});

export default productApi;
