import type { PostDetailsResponse } from '@entities/post-details/api/types';

import type { PostDetailsHeaderProps } from './post-details-header';

export const toPostDetailHeaderProps = (
  response: PostDetailsResponse,
): Omit<PostDetailsHeaderProps, 'onBackClick'> => {
  const { data } = response;

  return {
    title: data.title,
    username: data.leader.username,
    userImageUrl: data.leader.userImageUrl,
    dday: data.dday,
  };
};
