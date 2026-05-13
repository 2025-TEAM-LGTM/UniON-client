import { queryKeys } from '@shared/constants/query-keys';
import { useQuery } from '@tanstack/react-query';

import { getRecommendMembers, type GetRecommendParams } from './recommend-api';

export const useGetRecommendMembers = (
  postId: number,
  params: GetRecommendParams,
) => {
  return useQuery({
    queryKey: queryKeys.recommend.list(postId, params),
    queryFn: () => getRecommendMembers(postId, params),
    enabled: postId > 0,
  });
};
