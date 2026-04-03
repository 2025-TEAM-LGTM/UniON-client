import type { PostDetailsResponse } from '@entities/post-details/api/types';

export const MOCK_POST_DETAIL: PostDetailsResponse = {
  status: 200,
  msg: 'OK',
  data: {
    postId: 1,
    leader: {
      userId: 30001,
      username: '슬찬',
      userImageUrl: null,
    },
    title: '대학생 연합 해커톤 서비스 프론트엔드 구합니다',
    dday: 5,
    domains: [
      {
        id: 1,
        name: 'IT/개발',
      },
      {
        id: 3,
        name: '창업',
      },
    ],
    recruitPeriod: {
      startDate: '2026-04-01',
      endDate: '2026-04-09',
    },
    homepageUrl: 'www.linkareer.com',
    contact: 'user_30001.gmail.com',
    currentRoles: [
      {
        roleId: 105,
        roleName: 'PR/Marketing Planner',
        count: 1,
      },
      {
        roleId: 401,
        roleName: 'UI/UX Designer',
        count: 1,
      },
      {
        roleId: 304,
        roleName: 'Data/AI engineer',
        count: 1,
      },
    ],
    recruitRoles: [
      {
        roleId: 301,
        roleName: 'Frontend developer',
        count: 2,
      },
      {
        roleId: 302,
        roleName: 'Backend developer',
        count: 1,
      },
    ],
    seeking:
      '대학생 연합 해커톤에서 실제로 시연 가능한 서비스 MVP를 함께 만들 프론트엔드 개발자 2명과 백엔드 개발자 1명을 모집하고 있습니다. 프론트엔드는 React 기반으로 사용자 흐름이 자연스러운 화면을 구현해 본 분, 백엔드는 API 설계 및 데이터 연동 경험이 있는 분이면 특히 잘 맞습니다. 짧은 기간 안에 빠르게 기능을 완성해야 하는 만큼, 협업 과정에서 적극적으로 의견을 나누고 맡은 기능을 책임감 있게 마무리할 수 있는 분을 찾고 있습니다. 해커톤, 사이드 프로젝트, 공모전 등에서 MVP를 끝까지 만들어 본 경험이 있다면 더욱 환영합니다.',
    aboutUs:
      '저희 팀은 대학생 연합 해커톤에 참가해 팀빌딩 과정의 불편을 해결하는 서비스형 웹 프로젝트를 준비하고 있습니다. 현재 팀은 기획/마케팅 1명, UI/UX 디자이너 1명, Data/AI 엔지니어 1명으로 구성되어 있으며, 문제 정의와 핵심 기능 설계, 화면 구조 정리까지는 완료된 상태입니다. 이제 실제 시연 가능한 수준의 서비스를 완성하기 위해 프론트엔드와 백엔드 개발 인력을 충원하려고 합니다. 협업 도구로는 Figma, Notion, Discord, GitHub를 사용하고 있으며, 주 1회 오프라인 회의와 필요 시 온라인 회의를 병행합니다. 일정이 빠듯한 해커톤 특성상 완성도와 속도를 함께 가져가는 팀 문화를 지향하고 있습니다.',
    teamCulture: {
      A: 1,
      B: 0,
      F: 1,
      I: 1,
      L: 0,
    },
    imageUrl:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
  },
};
