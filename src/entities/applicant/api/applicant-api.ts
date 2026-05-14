import { get } from '@shared/api/http';

import type { GetApplicantsResponseData } from './types';

export interface GetApplicantsParams {
  r?: number[];
  hs?: number[];
  p?: string[];
}

export const getApplicants = (
  postId: number,
  params: GetApplicantsParams,
): Promise<GetApplicantsResponseData> => {
  return get<GetApplicantsResponseData, Record<string, unknown>>(
    `/api/posts/${postId}/applicants`,
    {
      ...(params.r && params.r.length > 0 && { r: params.r }),
      ...(params.hs && params.hs.length > 0 && { hs: params.hs }),
      ...(params.p && params.p.length > 0 && { p: params.p }),
    },
  );
};
