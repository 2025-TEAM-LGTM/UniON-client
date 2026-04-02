import type { PortfolioDetailResponse } from '../api/types';

export interface PortfolioDetailViewModel {
  portfolioId: number;
  title: string;
  summary: string;
  domainLabel: string;
  roleLabel: string;
  headcount: number;
  headcountLabel: string;
  externUrl: string | null;
  externUrlLabel: string;
  imageUrl: string | null;
  star: {
    situation: string;
    task: string;
    action: string;
    result: string;
  };
}

const normalizeUrl = (url: string): string | null => {
  const trimmed = url.trim();

  if (!trimmed) return null;
  if (/^https?:\/\//i.test(trimmed)) {
    return trimmed;
  }

  return `https://${trimmed}`;
};

export const toPortfolioDetailViewModel = (
  portfolio: PortfolioDetailResponse,
): PortfolioDetailViewModel => {
  const externUrl = normalizeUrl(portfolio.externUrl);

  return {
    portfolioId: portfolio.portfolioId,
    title: portfolio.title,
    summary: portfolio.summary,
    domainLabel: portfolio.domain.name,
    roleLabel: portfolio.role.name,
    headcount: portfolio.headcount,
    headcountLabel: `${portfolio.headcount}명`,
    externUrl,
    externUrlLabel: externUrl ? '공식 링크 바로가기' : '-',
    imageUrl: portfolio.imageUrl,
    star: {
      situation: portfolio.Stext,
      task: portfolio.Ttext,
      action: portfolio.Atext,
      result: portfolio.Rtext,
    },
  };
};
