import { queryKeys } from '@shared/constants/query-keys';
import { useQuery } from '@tanstack/react-query';

import { getMemberProfile } from './profile-api';

export const useGetMemberProfile = (memberId: string | undefined) => {
  return useQuery({
    queryKey: queryKeys.member.profile(memberId!),
    queryFn: () => getMemberProfile(memberId!),
    enabled: memberId != null,
  });
};
