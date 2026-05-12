import { get } from '@shared/api/http';

import type { PortfolioListDataResponse } from './types';

export const getMemberPortfolios = (
  memberId: string,
): Promise<PortfolioListDataResponse> => {
  return get<PortfolioListDataResponse>(`/api/members/${memberId}/portfolio`);
};

export const getMyPortfolios = (): Promise<PortfolioListDataResponse> => {
  return get<PortfolioListDataResponse>('/api/me/portfolio');
};
