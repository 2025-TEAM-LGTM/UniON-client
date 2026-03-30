import type { PortfolioListResponse } from '@entities/portfolio/api/types';

export const MOCK_PORTFOLIOS_RESPONSE: PortfolioListResponse = {
  status: 200,
  msg: 'OK',
  data: {
    portfolios: [
      {
        portfolioId: 10,
        title: '작은 공지도 크게 알리는 공연 공지의 공식, AMP',
        summary: '실시간 공연 공지 웹',
        domain: {
          id: 201,
          name: '창업',
        },
        role: {
          id: 301,
          name: 'Frontend Developer',
        },
        headcount: 11,
        imageUrl:
          'https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1200&q=80',
      },
      {
        portfolioId: 9,
        title: '내가 직접 이해하고 선택하는 보험, Bofit',
        summary:
          '누구나 보험을 이해하고 스스로 선택할 수 있도록 돕는 인슈어테크 서비스',
        domain: {
          id: 202,
          name: '창업',
        },
        role: {
          id: 301,
          name: 'Frontend Developer',
        },
        headcount: 12,
        imageUrl:
          'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
      },
      {
        portfolioId: 8,
        title: 'AI 보이스 활용 Z세대 콘텐츠 마케팅',
        summary: '하이브 AI 기업 ‘수퍼톤 플레이’ 서포터즈',
        domain: {
          id: 203,
          name: 'AI',
        },
        role: {
          id: 301,
          name: 'Frontend Developer',
        },
        headcount: 4,
        imageUrl: null,
      },
      {
        portfolioId: 7,
        title: 'AI 보이스 활용 Z세대 콘텐츠 마케팅',
        summary: '하이브 AI 기업 ‘수퍼톤 플레이’ 서포터즈',
        domain: {
          id: 203,
          name: 'AI',
        },
        role: {
          id: 301,
          name: 'Frontend Developer',
        },
        headcount: 4,
        imageUrl: null,
      },
    ],
  },
};
