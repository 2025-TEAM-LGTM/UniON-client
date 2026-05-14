import { queryKeys } from '@shared/constants/query-keys';
import { useQuery } from '@tanstack/react-query';

import { getPersonalityFilter } from './personality-api';

export const useGetPersonalityFilter = () => {
  return useQuery({
    queryKey: queryKeys.personality.all,
    queryFn: getPersonalityFilter,
    staleTime: Infinity,
  });
};
