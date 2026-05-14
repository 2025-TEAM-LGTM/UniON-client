import { ENV } from '@shared/constants/env';
import { ROUTE_PATH } from '@shared/constants/path';
import {
  clearAccessToken,
  getAccessToken,
  setAccessToken,
} from '@shared/utils/auth/token';
import axios from 'axios';

export const instance = axios.create({
  baseURL: ENV.API_BASE_URL,
  timeout: 15000,
});

instance.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token != null) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

let refreshPromise: Promise<boolean> | null = null;

const tryRefresh = (): Promise<boolean> => {
  if (refreshPromise != null) return refreshPromise;

  refreshPromise = (async () => {
    try {
      const baseUrl = ENV.API_BASE_URL.replace(/\/$/, '');
      const response = await fetch(`${baseUrl}/api/auth/refresh`, {
        method: 'POST',
        credentials: 'include',
      });

      if (!response.ok) return false;

      const accessToken = response.headers.get('Authorization');
      if (accessToken == null) return false;

      setAccessToken(accessToken.replace('Bearer ', ''));
      return true;
    } catch {
      return false;
    } finally {
      refreshPromise = null;
    }
  })();

  return refreshPromise;
};

instance.interceptors.response.use(
  (res) => res,
  async (err) => {
    const originalRequest = err.config;

    if (err.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshed = await tryRefresh();

      if (!refreshed) {
        clearAccessToken();
        window.location.href = ROUTE_PATH.LOGIN;
        return Promise.reject(err);
      }

      const newToken = getAccessToken();
      if (newToken != null) {
        originalRequest.headers['Authorization'] = `Bearer ${newToken}`;
      }

      return instance(originalRequest);
    }

    return Promise.reject(err);
  },
);
