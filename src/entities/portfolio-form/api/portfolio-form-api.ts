import { post } from '@shared/api/http';

import type {
  CreatePortfolioRequest,
  CreatePortfolioResponseData,
} from './types';

export const createPortfolio = (
  body: CreatePortfolioRequest,
): Promise<CreatePortfolioResponseData> => {
  return post<CreatePortfolioResponseData, CreatePortfolioRequest>(
    '/api/portfolios',
    body,
  );
};
