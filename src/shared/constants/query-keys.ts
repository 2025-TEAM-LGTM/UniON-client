import type { GetApplicantsParams } from '@entities/applicant/api/applicant-api';
import type { GetMembersParams } from '@entities/members/api/members-api';
import type { GetPostsParams } from '@entities/posts/api/posts-api';
import type { GetRecommendParams } from '@entities/recommend/api/recommend-api';

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
    portfolioDetail: (memberId: string, portfolioId: string) =>
      ['member', 'portfolioDetail', memberId, portfolioId] as const,
  },
  me: {
    all: ['me'] as const,
    profile: () => ['me', 'profile'] as const,
    portfolios: () => ['me', 'portfolios'] as const,
    portfolioDetail: (portfolioId: string) =>
      ['me', 'portfolioDetail', portfolioId] as const,
    myPost: () => ['me', 'myPost'] as const,
  },
  applicants: {
    all: ['applicants'] as const,
    list: (postId: number, params: GetApplicantsParams) =>
      ['applicants', 'list', postId, params] as const,
  },
  recommend: {
    all: ['recommend'] as const,
    list: (postId: number, params: GetRecommendParams) =>
      ['recommend', 'list', postId, params] as const,
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
  university: {
    all: ['university'] as const,
    list: (query: string) => ['university', 'list', query] as const,
  },
} as const;
