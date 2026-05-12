import { get } from '@shared/api/http';

import type { ProfileResponseData } from './types';

export const getMemberProfile = (
  memberId: string,
): Promise<ProfileResponseData> => {
  return get<ProfileResponseData>(`/api/members/${memberId}/profile`);
};

export const getMyProfile = (): Promise<ProfileResponseData> => {
  return get<ProfileResponseData>('/api/me/profile');
};
