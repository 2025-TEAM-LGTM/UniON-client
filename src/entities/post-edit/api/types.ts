import type { SuccessResponse } from '@shared/api/types';
import type { TeamCulture } from '@shared/utils/team-culture/types';

export interface PostDetailLeaderResponse {
  userId: number;
  username: string;
  userImageUrl: string | null;
}

export interface PostDetailDomainResponse {
  id: number;
  name: string;
}

export interface PostDetailRoleResponse {
  roleId: number;
  roleName: string;
  count: number;
}

export interface PostDetailResponse {
  postId: number;
  leader: PostDetailLeaderResponse;
  title: string;
  dday: number;
  domains: PostDetailDomainResponse[];
  recruitPeriod: {
    startDate: string;
    endDate: string;
  };
  homepageUrl: string;
  contact: string;
  currentRoles: PostDetailRoleResponse[];
  recruitRoles: PostDetailRoleResponse[];
  seeking: string;
  aboutUs: string;
  teamCulture: TeamCulture;
  imageUrl: string;
}

export type GetPostDetailResponse = SuccessResponse<PostDetailResponse>;
