import type { SuccessResponse } from '@shared/api/types';

export interface PortfolioDomainResponse {
  id: number;
  name: string;
}

export interface PortfolioRoleResponse {
  id: number;
  name: string;
}

export interface PortfolioItemResponse {
  portfolioId: number;
  title: string;
  summary: string;
  domain: PortfolioDomainResponse;
  role: PortfolioRoleResponse;
  headcount: number;
  imageUrl: string | null;
}

export interface PortfolioListDataResponse {
  portfolios: PortfolioItemResponse[];
}

export type PortfolioListResponse = SuccessResponse<PortfolioListDataResponse>;
