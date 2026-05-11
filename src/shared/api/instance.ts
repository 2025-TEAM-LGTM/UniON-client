import { ENV } from '@shared/constants/env';
import axios from 'axios';

export const instance = axios.create({
  baseURL: ENV.API_BASE_URL,
  timeout: 15000,
});

instance.interceptors.response.use(
  (res) => res,
  (err) => Promise.reject(err),
);
