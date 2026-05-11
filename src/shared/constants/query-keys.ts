import type { GetPostsParams } from '@entities/posts/api/posts-api';

export const queryKeys = {
  posts: {
    all: ['posts'] as const,
    list: (params: GetPostsParams) => ['posts', 'list', params] as const,
    detail: (postId: number) => ['posts', 'detail', postId] as const,
  },
  member: {
    all: ['member'] as const,
    profile: (memberId: string) => ['member', 'profile', memberId] as const,
    portfolios: (memberId: string) =>
      ['member', 'portfolios', memberId] as const,
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
