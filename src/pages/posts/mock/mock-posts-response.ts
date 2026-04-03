import type { GetPostsResponse } from '@entities/posts/api/types';

export const MOCK_POST_RESPONSE: GetPostsResponse = {
  status: 200,
  msg: 'success',
  data: {
    posts: [
      {
        postId: 1,
        title: '대학생 연합 해커톤 서비스 프론트엔드 구합니다',
        dday: 5,
        domains: [
          { id: 1, name: 'IT' },
          { id: 3, name: '창업' },
        ],
        recruits: [
          {
            roleId: 301,
            roleName: 'Frontend developer',
            roleCount: 2,
          },
          {
            roleId: 302,
            roleName: 'Backend developer',
            roleCount: 1,
          },
        ],
        nowCount: 3,
        applied: false,
      },
      {
        postId: 2,
        title: '브랜딩 중심 사이드프로젝트 디자이너 모집',
        dday: 12,
        domains: [{ id: 2, name: '디자인' }],
        recruits: [
          {
            roleId: 401,
            roleName: 'UI/UX Designer',
            roleCount: 1,
          },
          {
            roleId: 402,
            roleName: 'Graphic Designer',
            roleCount: 1,
          },
        ],
        nowCount: 2,
        applied: true,
      },
      {
        postId: 3,
        title: '공모전 팀원 모집합니다',
        dday: 3,
        domains: [
          { id: 3, name: '창업' },
          { id: 4, name: '마케팅' },
        ],
        recruits: [
          {
            roleId: 105,
            roleName: 'PR/Marketing Planner',
            roleCount: 1,
          },
          {
            roleId: 103,
            roleName: 'Digital Marketer',
            roleCount: 2,
          },
        ],
        nowCount: 4,
        applied: false,
      },
      {
        postId: 4,
        title: '앱 런칭용 백엔드/프론트엔드 모집',
        dday: 9,
        domains: [{ id: 1, name: 'IT' }],
        recruits: [
          {
            roleId: 301,
            roleName: 'Frontend developer',
            roleCount: 1,
          },
          {
            roleId: 302,
            roleName: 'Backend developer',
            roleCount: 1,
          },
        ],
        nowCount: 2,
        applied: false,
      },
    ],
  },
};
