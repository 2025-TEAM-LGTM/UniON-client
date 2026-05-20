import { get, patch } from '@shared/api/http';

import type { ProfileResponseData, UpdateProfileRequest } from './types';

export const getMemberProfile = (
  memberId: string,
): Promise<ProfileResponseData> => {
  return get<ProfileResponseData>(`/api/members/${memberId}/profile`);
};

export const getMyProfile = (): Promise<ProfileResponseData> => {
  return get<ProfileResponseData>('/api/me/profile');
};

export const updateMyProfile = (
  body: UpdateProfileRequest,
): Promise<ProfileResponseData> => {
  return patch<ProfileResponseData, UpdateProfileRequest>(
    '/api/me/profile',
    body,
  );
};
