import { ENV } from '@shared/constants/env';
import {
  clearAccessToken,
  getAccessToken,
  setAccessToken,
} from '@shared/utils/auth/token';

const REFRESH_URL = `${ENV.API_BASE_URL}/auth/refresh`;

interface RequestOptions extends RequestInit {
  skipAuth?: boolean;
}

const fetchWithAuth = async (
  url: string,
  options: RequestOptions = {},
): Promise<Response> => {
  const { skipAuth = false, ...fetchOptions } = options;

  const headers = new Headers(fetchOptions.headers);

  if (!skipAuth) {
    const token = getAccessToken();
    if (token != null) {
      headers.set('Authorization', `Bearer ${token}`);
    }
  }

  const response = await fetch(`${ENV.API_BASE_URL}${url}`, {
    ...fetchOptions,
    headers,
  });

  if (response.status === 401 && !skipAuth) {
    const refreshed = await tryRefreshToken();

    if (!refreshed) {
      clearAccessToken();
      window.location.href = '/login';
      return response;
    }

    const newToken = getAccessToken();
    if (newToken != null) {
      headers.set('Authorization', `Bearer ${newToken}`);
    }

    return fetch(`${ENV.API_BASE_URL}${url}`, { ...fetchOptions, headers });
  }

  return response;
};

const tryRefreshToken = async (): Promise<boolean> => {
  try {
    const response = await fetch(REFRESH_URL, {
      method: 'POST',
      credentials: 'include',
    });

    if (!response.ok) {
      return false;
    }

    const newAccessToken = response.headers.get('Authorization');

    if (newAccessToken == null) {
      return false;
    }

    setAccessToken(newAccessToken.replace('Bearer ', ''));
    return true;
  } catch {
    return false;
  }
};

export default fetchWithAuth;
