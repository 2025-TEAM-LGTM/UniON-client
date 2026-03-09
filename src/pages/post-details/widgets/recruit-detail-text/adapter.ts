import type { PostDetailsResponse } from '@entities/post-details/api/types';

import type { RecruitDetailTextProps } from './recruit-detail-text';

export const toRecruitDetailTextProps = (
  response: PostDetailsResponse,
): RecruitDetailTextProps => {
  const { data } = response;

  return {
    imageUrl: data.imageUrl,
    seeking: data.seeking,
    aboutUs: data.aboutUs,
    teamCulture: data.teamCulture,
  };
};
