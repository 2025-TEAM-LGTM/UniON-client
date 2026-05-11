import type { GetPostsParams } from '@entities/posts/api/posts-api';

export const queryKeys = {
  posts: {
    all: ['posts'] as const,
    list: (params: GetPostsParams) => ['posts', 'list', params] as const,
  },
  fieldRole: {
    all: ['fieldRole'] as const,
    list: (fieldId?: number | null) =>
      ['fieldRole', 'list', fieldId ?? null] as const,
  },
  domain: {
    all: ['domain'] as const,
  },
} as const;
