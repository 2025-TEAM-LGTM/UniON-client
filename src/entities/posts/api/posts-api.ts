import type { CreatePostRequest } from '@entities/post-create/api/types';
import { get, patch } from '@shared/api/http';

import type { PostsDataResponse } from './types';

export interface GetPostsParams {
  d?: number[];
  f?: number | null;
  r?: number[];
}

export const getPosts = (
  params: GetPostsParams,
): Promise<PostsDataResponse> => {
  return get<PostsDataResponse, Record<string, unknown>>('/api/posts', {
    ...(params.d && params.d.length > 0 && { d: params.d }),
    ...(params.f != null && { f: params.f }),
    ...(params.r && params.r.length > 0 && { r: params.r }),
  });
};

export const updatePost = (
  postId: number,
  body: CreatePostRequest,
): Promise<{ postId: number }> => {
  return patch<{ postId: number }, CreatePostRequest>(
    `/api/posts/${postId}`,
    body,
  );
};
