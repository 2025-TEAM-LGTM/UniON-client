import type { PortfolioListResponse } from '@entities/portfolio/api/types';

import amp from './amp.png';
import mock1 from './mock1.jpg';
import mock2 from './mock2.jpg';
import nn from './nn.png';

export const MOCK_PORTFOLIOS_RESPONSE: PortfolioListResponse = {
  status: 200,
  msg: 'OK',
  data: {
    portfolios: [
      {
        portfolioId: 1,
        title: '작은 공지도 크게 울리는 공연 공지의 공식, AMP',
        summary:
          '변수가 많은 공연 현장에서 흩어진 공지를 모아 실시간 알림을 제공하는 공연 공식 공지 서비스',
        domain: {
          id: 101,
          name: 'IT',
        },
        role: {
          id: 301,
          name: 'Frontend developer',
        },
        headcount: 3,
        imageUrl: amp,
      },
      {
        portfolioId: 2,
        title: '이커머스 가입 전환 개선 프로젝트',
        summary:
          '가입 퍼널 분석과 화면 개편을 통해 모바일 이탈률을 낮추고 회원가입 전환율을 개선한 프로젝트',
        domain: {
          id: 101,
          name: 'IT 서비스',
        },
        role: {
          id: 301,
          name: 'Frontend developer',
        },
        headcount: 4,
        imageUrl: mock1,
      },
      {
        portfolioId: 3,
        title: '폰트 플랫폼 눈누 리디자인',
        summary:
          '사용자 탐색 흐름과 정보 구조를 개선해 폰트 탐색 경험을 재설계한 리디자인 프로젝트',
        domain: {
          id: 101,
          name: 'IT 서비스',
        },
        role: {
          id: 401,
          name: 'UI/UX Designer',
        },
        headcount: 4,
        imageUrl: nn,
      },
      {
        portfolioId: 4,
        title: 'AI 보이스 활용 Z세대 콘텐츠 마케팅',
        summary: 'AI 캐릭터 IP 기반 영상 콘텐츠 기획 및 제작',
        domain: {
          id: 103,
          name: 'AI 콘텐츠',
        },
        role: {
          id: 101,
          name: 'Content Marketer',
        },
        headcount: 1,
        imageUrl: mock2,
      },
    ],
  },
};
