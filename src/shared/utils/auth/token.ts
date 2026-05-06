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

    if (payload == null) {
      return null;
    }

    const base64 = payload.replace(/-/g, '+').replace(/_/g, '/');
    const remainder = base64.length % 4;
    const padded =
      remainder === 0 ? base64 : base64 + '==='.slice(0, 4 - remainder);

    const binary = atob(padded);
    const bytes = Uint8Array.from(binary, (c) => c.charCodeAt(0));
    const json = new TextDecoder('utf-8').decode(bytes);

    return JSON.parse(json) as T;
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
