export interface PostDetailsResponse {
  status: number;
  msg: string;
  dday: number; // TODO: API 확정 후 수정
  data: {
    postId: number;
    leader: {
      userId: number;
      username: string;
      userImageUrl: string | null;
    };
    title: string;
    domains: Array<{
      // TODO: API 확정 후 수정
      id: number;
      name: string;
    }>;
    recruitPeriod: {
      startDate: string;
      endDate: string;
    };
    homepageUrl?: string;
    contact: string;
    recruits: Array<{
      // TODO: API 확정 후 수정
      roleId: number;
      roleName: string;
      roleCount: number;
    }>;
    seeking: string;
    aboutUs: string;
    teamCulture: Record<string, number>;
    imageUrl: string | null;
  };
}
