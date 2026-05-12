import { queryKeys } from '@shared/constants/query-keys';
import { useQuery } from '@tanstack/react-query';

import { getMembers, type GetMembersParams } from './members-api';

export const useGetMembers = (params: GetMembersParams) => {
  return useQuery({
    queryKey: queryKeys.member.list(params),
    queryFn: () => getMembers(params),
  });
};
