import { get } from '@shared/api/http';

import type { PortfolioListDataResponse } from './types';

export const getMemberPortfolios = (
  memberId: string,
): Promise<PortfolioListDataResponse> => {
  return get<PortfolioListDataResponse>(`/api/members/${memberId}/portfolio`);
};
