import type { GetPortfolioDetailResponse } from '@entities/my-portfolio-details/api/types';

export const MOCK_PORTFOLIO_DETAILS_RESPONSE: GetPortfolioDetailResponse = {
  status: 200,
  msg: 'OK',
  data: {
    portfolioId: 105,
    title: '이커머스 가입 전환 개선 프로젝트',
    summary:
      '신규 이커머스 서비스 초기 가입 퍼널을 개선해 모바일 이탈률을 낮추고 전환율을 높인 프로젝트',
    domain: {
      id: 101,
      name: 'IT',
    },
    role: {
      id: 401,
      name: 'Frontend Developer',
    },
    headcount: 11,
    externUrl: 'https://example.com',
    Stext:
      '신규 이커머스 서비스 런칭 초기 단계에서 사용자 유입은 증가하고 있었지만, 회원가입 전환율이 낮은 문제가 발생했습니다. 특히 모바일 환경에서 이탈이 높았고, 가입 프로세스가 길고 복잡하다는 사용자 피드백이 지속적으로 수집되었습니다.',
    Ttext:
      '회원가입 전환율을 20% 이상 개선하고, 모바일 사용자 이탈률을 줄이는 것을 목표로 UX 개선 프로젝트를 담당하게 되었습니다. 제한된 개발 리소스 내에서 빠르게 실험하고 성과를 검증해야 하는 상황이었습니다.',
    Atext:
      '기존 가입 프로세스를 분석하여 병목 구간(입력 필드 과다, 인증 단계 복잡성)을 도출했습니다. 사용자 행동 데이터를 기반으로 핵심 이탈 구간을 정의하고 우선순위를 설정했습니다. A/B 테스트를 통해 소셜 로그인 기능 도입, 입력 필드 최소화 및 단계 축소, UI 단순화 및 가이드 문구 개선을 진행했고, 디자이너 및 개발자와 협업하여 2주 단위로 개선안을 적용하고 반복 테스트를 진행했습니다.',
    Rtext:
      '회원가입 전환율이 32% 증가했고, 모바일 이탈률은 18% 감소했습니다. 가입 완료까지 평균 소요 시간은 40% 단축되었으며, 사용자 만족도 설문에서 가입 편의성 관련 긍정 응답 비율도 상승했습니다.',
    imageUrl: 'https://picsum.photos/1200/800',
  },
};
