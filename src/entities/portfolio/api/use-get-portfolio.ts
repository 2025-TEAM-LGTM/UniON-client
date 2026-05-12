import { queryKeys } from '@shared/constants/query-keys';
import { useQuery } from '@tanstack/react-query';

import { getMemberPortfolios, getMyPortfolios } from './portfolio-api';

export const useGetMemberPortfolios = (memberId: string | undefined) => {
  return useQuery({
    queryKey: memberId
      ? queryKeys.member.portfolios(memberId)
      : (['member', 'portfolios', 'placeholder'] as const),
    queryFn: () => getMemberPortfolios(memberId as string),

    enabled: memberId != null,
  });
};

export const useGetMyPortfolios = () => {
  return useQuery({
    queryKey: queryKeys.me.portfolios(),
    queryFn: getMyPortfolios,
  });
};
