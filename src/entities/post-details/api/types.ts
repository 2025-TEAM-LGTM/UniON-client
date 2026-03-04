export interface PostDetailsResponse {
  status: number;
  msg: string;
  dday: number; // TODO: API 확정 후 수정
  data: {
    postId: number;
    leader: {
      userId: number;
      username: string;
      userImageUrl: string;
    };
    title: string;
    domainIds: number[];
    recruitPeriod: {
      startDate: string;
      endDate: string;
    };
    homepageUrl: string;
    contact: string;
    currentRoles: Array<{ roleId: number; count: number }>;
    recruitRoles: Array<{ roleId: number; count: number }>;
    seeking: string;
    aboutUs: string;
    teamCulture: Record<string, number>;
    imageUrl: string;
  };
}
