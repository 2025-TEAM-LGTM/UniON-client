import { queryKeys } from '@shared/constants/query-keys';
import { useQuery } from '@tanstack/react-query';

import { getSkills } from './skill-api';

export const useGetSkills = () => {
  return useQuery({
    queryKey: queryKeys.skill.all,
    queryFn: getSkills,
    staleTime: Infinity,
  });
};
