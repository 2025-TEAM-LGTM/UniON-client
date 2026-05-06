import type { TokenPayload } from './types';

let accessToken: string | null = null;

export const setAccessToken = (token: string): void => {
  accessToken = token;
};

export const getAccessToken = (): string | null => {
  return accessToken;
};

export const clearAccessToken = (): void => {
  accessToken = null;
};

export const decodeTokenPayload = <T>(token: string): T | null => {
  try {
    const payload = token.split('.')[1];
    return JSON.parse(atob(payload)) as T;
  } catch {
    return null;
  }
};

export const getCurrentUserId = (): number | null => {
  if (accessToken == null) {
    return null;
  }

  const payload = decodeTokenPayload<TokenPayload>(accessToken);
  return payload != null ? payload.userId : null;
};
