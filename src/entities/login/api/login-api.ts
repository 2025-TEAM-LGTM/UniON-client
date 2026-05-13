import { setAccessToken } from '@shared/utils/auth/token';

export interface LoginRequest {
  loginId: string;
  password: string;
}

const baseUrl = import.meta.env.VITE_API_BASE_URL.replace(/\/$/, '');

export const login = async (body: LoginRequest): Promise<void> => {
  const response = await fetch(`${baseUrl}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      loginId: body.loginId,
      password: body.password,
    }),
    credentials: 'include',
  });

  if (response.status === 401) {
    throw new Error('UNAUTHORIZED');
  }

  if (!response.ok) {
    throw new Error('SERVER_ERROR');
  }

  const accessToken = response.headers.get('Authorization');
  if (accessToken != null) {
    setAccessToken(accessToken.replace('Bearer ', ''));
  }
};
