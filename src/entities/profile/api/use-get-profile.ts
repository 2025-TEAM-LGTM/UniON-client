import { queryKeys } from '@shared/constants/query-keys';
import { useQuery } from '@tanstack/react-query';

import { getMemberProfile } from './profile-api';

export const useGetMemberProfile = (memberId: string | undefined) => {
  return useQuery({
    queryKey: memberId
      ? queryKeys.member.profile(memberId)
      : (['member', 'profile', 'placeholder'] as const),
    queryFn: () => getMemberProfile(memberId as string),

    enabled: memberId != null,
  });
};
