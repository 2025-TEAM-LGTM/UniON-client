import type { PostDetailsResponse } from '@entities/post-details/api/types';

export const MOCK_POST_DETAIL: PostDetailsResponse = {
  status: 200,
  msg: 'OK',
  data: {
    postId: 100051,
    leader: {
      userId: 30001,
      username: '슬찬',
      userImageUrl: null,
    },
    title:
      '일상 엔지니어링 문제를 해결할 "미래 모빌리티 해커톤" 팀원 모집합니다!',
    dday: 4,
    domains: [
      {
        id: 109,
        name: 'Lifestyle',
      },
      {
        id: 101,
        name: 'Engineering',
      },
    ],
    recruitPeriod: {
      startDate: '2026-01-19',
      endDate: '2026-03-12',
    },
    homepageUrl: 'www.linkareer.com',
    contact: 'user_30001.gmail.com',
    currentRoles: [
      {
        roleId: 303,
        roleName: 'Mobile App Developer',
        count: 2,
      },
      {
        roleId: 306,
        roleName: 'Embedded / Hardware Engineer',
        count: 3,
      },
      {
        roleId: 307,
        roleName: 'QA / Technical Support',
        count: 1,
      },
    ],
    recruitRoles: [
      {
        roleId: 303,
        roleName: 'Mobile App Developer',
        count: 1,
      },
      {
        roleId: 306,
        roleName: 'Embedded / Hardware Engineer',
        count: 1,
      },
      {
        roleId: 307,
        roleName: 'QA / Technical Support',
        count: 1,
      },
    ],
    seeking:
      '저희 팀은 현재 모바일 앱 개발자 1명, 임베디드/하드웨어 엔지니어 1명, QA/기술 지원 1명을 긴급히 모집하고 있습니다. 라이프스타일과 엔지니어링 문제 해결에 관심 있는 분이라면 더욱 환영합니다. 사용자 인터뷰를 통해 니즈를 파악하실 수 있는 분이나, API 서버와의 연결 문제를 해결해 본 경험이 있으신 분들을 찾고 있습니다. 또한, 미해결된 버그 해결이나 일정 내 마감 처리 경험이 있으신 분이라면 큰 도움이 될 것입니다. Flutter 또는 Docker 환경에 익숙하신 분들은 더욱 환영합니다.',
    aboutUs:
      '저희 팀은 일상 생활에서 발생하는 다양한 엔지니어링 문제를 미래 모빌리티 기술을 통해 해결하는 해커톤에 참가하고 있습니다. 현재 저희는 모바일 앱의 사용자 친화적인 인터페이스를 디자인하는 과정의 중반 단계에 있으며, 간헐적으로 발생하는 통합 문제를 조정 중입니다. 주 1회 오프라인으로 모여 논의하고 있으며, 상황에 따라 추가적인 온라인 회의를 진행합니다. 개발 및 디버깅은 주로 Git과 Jira를 활용하여 공동 작업하고 있습니다. 현재 팀 구성은 임베디드/하드웨어 엔지니어 3명, 모바일 앱 개발자 2명, QA/기술 지원 1명으로 이루어져 있습니다.',
    teamCulture: {
      A: 1,
      B: 0,
      F: 0,
      I: 0,
      L: 1,
    },
    imageUrl:
      'https://cdn.pixabay.com/photo/2026/02/23/11/18/11-18-48-660_1280.jpg',
  },
};
