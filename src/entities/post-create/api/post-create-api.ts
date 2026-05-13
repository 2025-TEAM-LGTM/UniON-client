import { post } from '@shared/api/http';

import type { CreatePostRequest, CreatePostResponseData } from './types';

export const createPost = (
  body: CreatePostRequest,
): Promise<CreatePostResponseData> => {
  return post<CreatePostResponseData, CreatePostRequest>('/api/posts', body);
};
