import type { PortfolioItemResponse } from '../api/types';

export interface Portfolio {
  portfolioId: number;
  title: string;
  summary: string;
  domainName: string;
  roleName: string;
  headcount: number;
  imageUrl: string | null;
}

export const toPortfolio = (portfolio: PortfolioItemResponse): Portfolio => {
  return {
    portfolioId: portfolio.portfolioId,
    title: portfolio.title,
    summary: portfolio.summary,
    domainName: portfolio.domain.name,
    roleName: portfolio.role.name,
    headcount: portfolio.headcount,
    imageUrl: portfolio.imageUrl,
  };
};

export const toPortfolios = (
  portfolios: PortfolioItemResponse[],
): Portfolio[] => {
  return portfolios.map(toPortfolio);
};
