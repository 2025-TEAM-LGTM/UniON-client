import { get } from '@shared/api/http';

import type { PostDetailsResponse } from './types';

export const getPostDetail = (
  postId: number,
): Promise<PostDetailsResponse['data']> => {
  return get<PostDetailsResponse['data']>(`/api/posts/${postId}`);
};
