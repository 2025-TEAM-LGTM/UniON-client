import type { GetPostsParams } from '@entities/posts/api/posts-api';

export const queryKeys = {
  posts: {
    all: ['posts'] as const,
    list: (params: GetPostsParams) => ['posts', 'list', params] as const,
  },
} as const;
