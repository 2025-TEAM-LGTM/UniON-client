import type { SuccessResponse } from '@shared/api/types';

export interface PortfolioMetaOptionResponse {
  id: number;
  name: string;
}

export interface PortfolioDetailResponse {
  portfolioId: number;
  title: string;
  summary: string;
  domain: PortfolioMetaOptionResponse;
  role: PortfolioMetaOptionResponse;
  headcount: number;
  externUrl: string;
  Stext: string;
  Ttext: string;
  Atext: string;
  Rtext: string;
  imageUrl: string | null;
}

type PortfolioDetailResponseData = PortfolioDetailResponse;

export type GetPortfolioDetailResponse =
  SuccessResponse<PortfolioDetailResponseData>;
