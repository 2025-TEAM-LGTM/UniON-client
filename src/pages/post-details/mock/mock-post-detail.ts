import type { PostDetailsResponse } from '@entities/post-details/api/types';

export const MOCK_POST_DETAIL: PostDetailsResponse = {
  status: 0,
  msg: 'ok',
  dday: 6,
  data: {
    postId: 1,
    leader: {
      userId: 10,
      username: 'nacintoshi',
      userImageUrl: 'https://picsum.photos/80', // null 가능
    },
    title: '공모전 같이 나갈 팀원 구합니다!',
    domainIds: [1, 2],
    recruitPeriod: {
      startDate: '2026-03-04',
      endDate: '2026-03-10',
    },

    homepageUrl: 'https://example.com',
    contact: 'open.kakao.com/xxxx',
    currentRoles: [{ roleId: 1, count: 1 }],
    recruitRoles: [{ roleId: 2, count: 2 }],
    seeking: '프론트엔드/디자이너 구합니다',
    aboutUs: '우리는 이런 팀이에요',
    teamCulture: { additionalProp1: 0 },
    imageUrl: null,
  },
};
