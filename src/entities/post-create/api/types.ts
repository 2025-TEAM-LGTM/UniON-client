import type { TeamCulture } from '@shared/utils/team-culture/types';

export interface RecruitPeriodRequest {
  startDate: string;
  endDate: string;
}

export interface RoleCountRequest {
  roleId: number;
  count: number;
}

export interface CreatePostRequest {
  title: string;
  domainIds: number[];
  recruitPeriod: RecruitPeriodRequest;
  homepageUrl: string | null;
  contact: string;
  currentRoles: RoleCountRequest[];
  recruitRoles: RoleCountRequest[];
  aboutUs: string;
  teamCulture: TeamCulture;
  seeking: string;
  imageKey: string | null;
  imageSize: number | null;
}

export interface CreatePostResponseData {
  postId: number;
}
