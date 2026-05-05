import type { PostFormValues } from '@entities/posts/model/post-form/post-form';

import type {
  PostDetailLeaderResponse,
  PostDetailResponse,
  PostDetailRoleResponse,
} from '../api/types';

export interface PostDetailLeader {
  userId: number;
  username: string;
  userImageUrl: string | null;
}

const toLeader = (leader: PostDetailLeaderResponse): PostDetailLeader => ({
  userId: leader.userId,
  username: leader.username,
  userImageUrl: leader.userImageUrl,
});

const toRoleCountValues = (roles: PostDetailRoleResponse[]) =>
  roles.map(({ roleId, count }) => ({ roleId, count }));

export const toPostFormValues = (
  detail: PostDetailResponse,
): PostFormValues => ({
  title: detail.title,
  domainIds: detail.domains.map((domain) => domain.id),
  recruitPeriod: detail.recruitPeriod,
  homepageUrl: detail.homepageUrl,
  contact: detail.contact,
  currentRoles: toRoleCountValues(detail.currentRoles),
  recruitRoles: toRoleCountValues(detail.recruitRoles),
  seeking: detail.seeking,
  aboutUs: detail.aboutUs,
  teamCulture: detail.teamCulture,
  image: {
    file: null,
    previewUrl: detail.imageUrl,
  },
});

export const toPostDetailLeader = (
  detail: PostDetailResponse,
): PostDetailLeader => toLeader(detail.leader);
