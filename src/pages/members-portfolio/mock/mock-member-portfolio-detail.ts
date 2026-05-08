import type { PortfolioDetailResponse } from '@entities/portfolio/api/types';

export const MOCK_MEMBER_PORTFOLIO_DETAIL: PortfolioDetailResponse = {
  portfolioId: 10,
  title: '사회적 기업 홍보 영상 제작',
  summary: '사회적 가치 창출하는 기업의 스토리를 영상으로 전달하였습니다',
  domain: { id: 111, name: 'Social Impact' },
  role: { id: 101, name: 'Content Marketer' },
  headcount: 4,
  externUrl: 'www.google.com',
  Stext: '사회적 기업의 인지도가 낮아 지원과 후원이 부족한 상황이었습니다',
  Ttext:
    '사회적 기업의 미션과 성과를 효과적으로 알리는 영상을 제작해 인지도를 높이는 역할을 맡았습니다',
  Atext:
    '인터뷰 진행부터 스토리보드 작성, 편집까지 전 과정에 참여하며, 타깃층 분석을 바탕으로 감성적 메시지를 강화했습니다',
  Rtext:
    '영상 공개 후 조회수가 5000회를 넘겼고, 후원 문의가 증가하는 등 긍정적 반응을 얻었습니다.',
  imageUrl: null,
};
