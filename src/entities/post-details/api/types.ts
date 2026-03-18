import type { TeamCulture } from '@shared/utils/team-culture/types';

export interface PostDetailsResponse {
  status: number;
  msg: string;
  data: {
    postId: number;
    leader: {
      userId: number;
      username: string;
      userImageUrl: string | null;
    };
    title: string;
    dday: number;
    domains: Array<{
      id: number;
      name: string;
    }>;
    recruitPeriod: {
      startDate: string;
      endDate: string;
    };
    homepageUrl?: string;
    contact: string;
    currentRoles: Array<{
      roleId: number;
      roleName: string;
      count: number;
    }>;
    recruitRoles: Array<{
      roleId: number;
      roleName: string;
      count: number;
    }>;
    seeking: string;
    aboutUs: string;
    teamCulture: TeamCulture;
    imageUrl: string | null;
  };
}
