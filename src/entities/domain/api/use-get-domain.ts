import { queryKeys } from '@shared/constants/query-keys';
import { useQuery } from '@tanstack/react-query';

import { getDomains } from './domain-api';

export const useGetDomains = () => {
  return useQuery({
    queryKey: queryKeys.domain.all,
    queryFn: getDomains,
    staleTime: Infinity,
  });
};
