import type { PortfolioListResponse } from '@entities/portfolio/api/types';

export const MOCK_MEMBER_PORTFOLIOS_RESPONSE: PortfolioListResponse = {
  status: 200,
  msg: 'OK',
  data: {
    portfolios: [
      {
        portfolioId: 10,
        title: '사회적 기업 홍보 영상 제작',
        summary: '사회적 가치 창출하는 기업의 스토리를 영상으로 전달하였습니다',
        domain: { id: 111, name: 'Social Impact' },
        role: { id: 101, name: 'Content Marketer' },
        headcount: 4,
        imageUrl: null,
      },
      {
        portfolioId: 9,
        title: '친환경 캠페인 콘텐츠 기획',
        summary: '친환경 생활의 중요성을 알리는 콘텐츠를 제작하였습니다',
        domain: { id: 108, name: 'Environment' },
        role: { id: 101, name: 'Content Marketer' },
        headcount: 3,
        imageUrl: null,
      },
    ],
  },
};
