export interface PostDomainResponse {
  id: number;
  name: string;
}

export interface PostRecruitResponse {
  roleId: number;
  roleName: string;
  roleCount: number;
}

export interface PostResponse {
  postId: number;
  title: string;
  dday: number;
  domains: PostDomainResponse[];
  recruits: PostRecruitResponse[];
  nowCount: number;
  applied: boolean;
}

export interface PostsDataResponse {
  posts: PostResponse[];
}

export interface GetPostsResponse {
  status: number;
  msg: string;
  data: PostsDataResponse;
}
