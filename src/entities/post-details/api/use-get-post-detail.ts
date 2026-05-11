import { queryKeys } from '@shared/constants/query-keys';
import { useQuery } from '@tanstack/react-query';

import { getPostDetail } from './post-details-api';

export const useGetPostDetail = (postId: number) => {
  return useQuery({
    queryKey: queryKeys.posts.detail(postId),
    queryFn: () => getPostDetail(postId),
    enabled: postId > 0,
  });
};
