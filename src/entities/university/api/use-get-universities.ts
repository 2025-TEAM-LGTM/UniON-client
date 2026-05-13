import { queryKeys } from '@shared/constants/query-keys';
import { useQuery } from '@tanstack/react-query';

import { getUniversities } from './university-api';

export const useGetUniversities = (query: string) => {
  return useQuery({
    queryKey: queryKeys.university.list(query),
    queryFn: () => getUniversities(query),
    staleTime: 30_000,
  });
};
