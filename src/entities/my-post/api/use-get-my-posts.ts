import { queryKeys } from '@shared/constants/query-keys';
import { useQuery } from '@tanstack/react-query';

import { getMyPosts } from './my-post-api';

export const useGetMyPosts = () => {
  return useQuery({
    queryKey: queryKeys.me.myPost(),
    queryFn: getMyPosts,
  });
};
