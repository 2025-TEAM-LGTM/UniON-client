import { get } from '@shared/api/http';

import type { PortfolioDetailResponse } from './types';

export const getMemberPortfolioDetail = (
  memberId: string,
  portfolioId: string,
): Promise<PortfolioDetailResponse> => {
  return get<PortfolioDetailResponse>(
    `/api/members/${memberId}/portfolio/${portfolioId}`,
  );
};
