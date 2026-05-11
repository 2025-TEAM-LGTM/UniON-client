import { queryKeys } from '@shared/constants/query-keys';
import { useQuery } from '@tanstack/react-query';

import { type GetSkillParams, getSkills } from './skill-api';

export const useGetSkills = (params?: GetSkillParams) => {
  return useQuery({
    queryKey: queryKeys.skill.list(params?.fieldId),
    queryFn: () => getSkills(params),
  });
};
