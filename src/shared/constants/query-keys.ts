import type { GetMembersParams } from '@entities/members/api/members-api';
import type { GetPostsParams } from '@entities/posts/api/posts-api';

export const queryKeys = {
  posts: {
    all: ['posts'] as const,
    list: (params: GetPostsParams) => ['posts', 'list', params] as const,
    detail: (postId: number) => ['posts', 'detail', postId] as const,
  },
  member: {
    all: ['member'] as const,
    list: (params: GetMembersParams) => ['member', 'list', params] as const,
    profile: (memberId: string) => ['member', 'profile', memberId] as const,
    portfolios: (memberId: string) =>
      ['member', 'portfolios', memberId] as const,
  },
  me: {
    all: ['me'] as const,
    profile: () => ['me', 'profile'] as const,
    portfolios: () => ['me', 'portfolios'] as const,
  },

  // dropdown
  fieldRole: {
    all: ['fieldRole'] as const,
    list: (fieldId?: number | null) =>
      ['fieldRole', 'list', fieldId ?? null] as const,
  },
  domain: {
    all: ['domain'] as const,
  },
  skill: {
    all: ['skill'] as const,
    list: (fieldId?: number | null) =>
      ['skill', 'list', fieldId ?? null] as const,
  },
  personality: {
    all: ['personality'] as const,
  },
} as const;
