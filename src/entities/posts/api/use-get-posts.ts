import { queryKeys } from '@shared/constants/query-keys';
import { useQuery } from '@tanstack/react-query';

import { getPosts, type GetPostsParams } from './posts-api';

export const useGetPosts = (params: GetPostsParams) => {
  return useQuery({
    queryKey: queryKeys.posts.list(params),
    queryFn: () => getPosts(params),
  });
};
