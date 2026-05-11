import { queryKeys } from '@shared/constants/query-keys';
import { useQuery } from '@tanstack/react-query';

import { getMemberPortfolios } from './portfolio-api';

export const useGetMemberPortfolios = (memberId: string | undefined) => {
  return useQuery({
    queryKey: queryKeys.member.portfolios(memberId!),
    queryFn: () => getMemberPortfolios(memberId!),
    enabled: memberId != null,
  });
};
