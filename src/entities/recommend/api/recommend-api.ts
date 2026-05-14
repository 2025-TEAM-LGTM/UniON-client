import { get } from '@shared/api/http';

import type { GetRecommendMembersResponseData } from './types';

export interface GetRecommendParams {
  r?: number[];
  hs?: number[];
  p?: string[];
}

export const getRecommendMembers = (
  postId: number,
  params: GetRecommendParams,
): Promise<GetRecommendMembersResponseData> => {
  return get<GetRecommendMembersResponseData, Record<string, unknown>>(
    `/api/posts/${postId}/matches`,
    {
      ...(params.r && params.r.length > 0 && { r: params.r }),
      ...(params.hs && params.hs.length > 0 && { hs: params.hs }),
      ...(params.p && params.p.length > 0 && { p: params.p }),
    },
  );
};
