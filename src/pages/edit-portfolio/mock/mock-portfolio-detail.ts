import type { PortfolioDetailResponse } from '@entities/portfolio-details/api/types';

export const MOCK_PORTFOLIO_DETAIL: PortfolioDetailResponse = {
  portfolioId: 407,
  title: 'test',
  summary: 'test',
  domain: { id: 101, name: 'Engineering' },
  role: { id: 401, name: 'UI/UX Designer' },
  headcount: 3,
  externUrl: 'http://aaaccc~.com',
  Stext:
    '사용자의 플랫폼 이탈률이 높고, 모바일 전환율이 낮은 문제가 있었습니다...',
  Ttext:
    '사용자 경험을 개선하고 전환율을 높이기 위해 플랫폼 전면 리뉴얼을 진행해야 했습니다...',
  Atext:
    'React와 TypeScript를 활용해 컴포넌트 기반 아키텍처로 전환하고, 코드 스플리팅과 lazy loading을 적용했습니다...',
  Rtext:
    '페이지 로딩 속도가 54% 단축되었고, 모바일 전환율이 38% 증가했습니다. 전체 매출은 3개월간 27% 증가했습니다...',
  imageUrl: 'https://example.com/image.png',
};
