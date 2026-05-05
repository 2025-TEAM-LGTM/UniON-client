import type { PostDetailResponse } from '@entities/post-edit/api/types';

export const MOCK_POST_EDIT: PostDetailResponse = {
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
    { id: 1, name: 'IT' },
    { id: 2, name: '디자인' },
  ],
  recruitPeriod: {
    startDate: '2026-01-19',
    endDate: '2026-03-12',
  },
  homepageUrl: 'www.linkareer.com',
  contact: 'user_30001.gmail.com',
  currentRoles: [
    { roleId: 101, roleName: 'Content Marketer', count: 2 },
    { roleId: 102, roleName: 'Social Media Marketer', count: 3 },
    { roleId: 103, roleName: 'Digital Marketer', count: 1 },
  ],
  recruitRoles: [
    { roleId: 104, roleName: 'Copywriter', count: 1 },
    { roleId: 105, roleName: 'PR/Marketing Planner', count: 1 },
    { roleId: 106, roleName: 'Brand Manager', count: 1 },
  ],
  seeking:
    '저희 팀은 현재 모바일 앱 개발자 1명, 임베디드/하드웨어 엔지니어 1명, QA/기술 지원 1명을 긴급히 모집하고 있습니다.',
  aboutUs:
    '저희 팀은 일상 생활에서 발생하는 다양한 엔지니어링 문제를 미래 모빌리티 기술을 통해 해결하는 해커톤에 참가하고 있습니다.',
  teamCulture: {
    A: 1,
    B: 0,
    F: 0,
    I: 0,
    L: 1,
  },
  imageUrl: 'https://example.com/image.png',
};

// 로컬 테스트용 - 현재 유저가 작성자인 경우와 아닌 경우를 전환해서 확인
export const MOCK_CURRENT_USER_ID = 30001;
