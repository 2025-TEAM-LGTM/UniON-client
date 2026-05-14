import { queryKeys } from '@shared/constants/query-keys';
import { useQuery } from '@tanstack/react-query';

import {
  getMemberPortfolioDetail,
  getMyPortfolioDetail,
} from './portfolio-detail-api';

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

export const useGetMyPortfolioDetail = (portfolioId: string | undefined) => {
  return useQuery({
    queryKey: queryKeys.me.portfolioDetail(portfolioId!),
    queryFn: () => getMyPortfolioDetail(portfolioId!),
    enabled: portfolioId != null,
  });
};
