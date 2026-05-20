import { ENV } from '@shared/constants/env';
import { clearAccessToken } from '@shared/utils/auth/token';

export const logout = async (): Promise<void> => {
  const baseUrl = ENV.API_BASE_URL.replace(/\/$/, '');

  await fetch(`${baseUrl}/api/auth/logout`, {
    method: 'GET',
    credentials: 'include',
  });

  clearAccessToken();
};
