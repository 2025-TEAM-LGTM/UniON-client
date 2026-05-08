import type { SuccessResponse } from '@shared/api/types';

export interface PortfolioFormOptionResponse {
  id: number;
  name: string;
}

export interface PortfolioDetailResponse {
  portfolioId: number;
  title: string;
  summary: string;
  domain: PortfolioFormOptionResponse;
  role: PortfolioFormOptionResponse;
  headcount: number;
  externUrl: string;
  Stext: string;
  Ttext: string;
  Atext: string;
  Rtext: string;
  imageUrl: string | null;
}

export type GetPortfolioDetailResponse =
  SuccessResponse<PortfolioDetailResponse>;
