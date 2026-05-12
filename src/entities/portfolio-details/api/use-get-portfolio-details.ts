import { queryKeys } from '@shared/constants/query-keys';
import { useQuery } from '@tanstack/react-query';

import { getMemberPortfolioDetail } from './portfolio-detail-api';

export const useGetMemberPortfolioDetail = (
  memberId: string | undefined,
  portfolioId: string | undefined,
) => {
  return useQuery({
    queryKey: queryKeys.member.portfolioDetail(memberId!, portfolioId!),
    queryFn: () => getMemberPortfolioDetail(memberId!, portfolioId!),
    enabled: memberId != null && portfolioId != null,
  });
};
