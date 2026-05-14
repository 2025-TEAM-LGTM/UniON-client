import { get } from '@shared/api/http';

import type { GetMembersResponseData } from './types';

export interface GetMembersParams {
  r?: number[];
  hs?: number[];
  p?: string[];
}

export const getMembers = (
  params: GetMembersParams,
): Promise<GetMembersResponseData> => {
  return get<GetMembersResponseData, Record<string, unknown>>('/api/members', {
    ...(params.r && params.r.length > 0 && { r: params.r }),
    ...(params.hs && params.hs.length > 0 && { hs: params.hs }),
    ...(params.p && params.p.length > 0 && { p: params.p }),
  });
};
