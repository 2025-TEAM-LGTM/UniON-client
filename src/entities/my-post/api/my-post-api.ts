import { get } from '@shared/api/http';

export interface GetMyPostsResponseData {
  postIds: number[];
}

export const getMyPosts = (): Promise<GetMyPostsResponseData> => {
  return get<GetMyPostsResponseData>('/api/me/mypost');
};
