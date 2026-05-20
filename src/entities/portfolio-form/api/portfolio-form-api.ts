import { patch, post } from '@shared/api/http';

import type {
  CreatePortfolioRequest,
  CreatePortfolioResponseData,
  PortfolioDetailResponse,
  UpdatePortfolioRequest,
} from './types';

export const createPortfolio = (
  body: CreatePortfolioRequest,
): Promise<CreatePortfolioResponseData> => {
  return post<CreatePortfolioResponseData, CreatePortfolioRequest>(
    '/api/me/portfolio',
    body,
  );
};

export const updatePortfolio = (
  portfolioId: string,
  body: UpdatePortfolioRequest,
): Promise<PortfolioDetailResponse> => {
  return patch<PortfolioDetailResponse, UpdatePortfolioRequest>(
    `/api/me/portfolio/${portfolioId}`,
    body,
  );
};
