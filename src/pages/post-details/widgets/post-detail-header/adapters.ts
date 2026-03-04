import type { PostDetailsResponse } from '@entities/post-details/api/types';

import type { PostDetailsHeaderProps } from './post-details-header';

export const toPostDetailHeaderProps = (
  res: PostDetailsResponse,
): Pick<
  PostDetailsHeaderProps,
  'username' | 'title' | 'userImageUrl' | 'dday'
> => {
  return {
    username: res.data.leader.username,
    title: res.data.title,
    userImageUrl: res.data.leader.userImageUrl,
    dday: res.dday,
  };
};
