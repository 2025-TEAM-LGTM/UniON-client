import { get, post } from '@shared/api/http';

import type {
  SignupRequest,
  SignupResponseData,
  UsernameCheckResponseData,
} from './types';

export const checkUsername = (
  username: string,
): Promise<UsernameCheckResponseData> => {
  return get<UsernameCheckResponseData>('/api/auth/username', { q: username });
};

export const signup = (body: SignupRequest): Promise<SignupResponseData> => {
  return post<SignupResponseData, SignupRequest>('/api/auth/signup', body);
};
