import type { PostDetailsResponse } from '@entities/post-details/api/types';

export interface TeamCultureMeta {
  title: string;
  labels: [string, string];
}

export const MOCK_TEAM_CULTURE: Record<string, TeamCultureMeta> = {
  decisionStructure: {
    title: '의사결정 구조',
    labels: ['리더 중심형', '수평 협업형'],
  },
  workProcess: {
    title: '업무 진행 방식',
    labels: ['체계적', '유연형'],
  },
  communicationMood: {
    title: '커뮤니케이션 분위기',
    labels: ['공식적', '자유로움'],
  },
  workLifeBalance: {
    title: '일과 생활의 균형',
    labels: ['워라밸 중시', '워크홀릭 중시'],
  },
  roleDivision: {
    title: '팀 내 역할 분담',
    labels: ['고정형', '유동형'],
  },
};

export interface PostDetailPageResponse extends PostDetailsResponse {
  data: PostDetailsResponse['data'] & {
    currentRoles: Array<{
      roleId: number;
      roleName: string;
      roleCount: number;
    }>;
  };
}

export const MOCK_POST_DETAIL: PostDetailPageResponse = {
  status: 200,
  msg: 'ok',
  dday: 6,
  data: {
    postId: 1,
    leader: {
      userId: 10,
      username: 'nacintoshi',
      userImageUrl: 'https://picsum.photos/80',
    },
    title: '공모전 같이 나갈 팀원 구합니다!',
    domains: [
      { id: 108, name: 'Environment' },
      { id: 107, name: 'Tourism' },
    ],
    recruitPeriod: {
      startDate: '2026-03-04',
      endDate: '2026-03-10',
    },
    homepageUrl: 'https://example.com',
    contact: 'team@example.com',
    currentRoles: [
      { roleId: 1, roleName: '기획자', roleCount: 2 },
      { roleId: 2, roleName: '디자이너', roleCount: 1 },
    ],
    recruits: [
      { roleId: 3, roleName: '프론트엔드', roleCount: 2 },
      { roleId: 4, roleName: '백엔드', roleCount: 1 },
    ],
    seeking: `이런 분을 찾고 있어요.
- React 기반 프론트엔드 개발 경험이 있는 분
- 디자이너, 기획자와 협업이 편한 분
- 일정 내 커뮤니케이션이 원활한 분`,
    aboutUs: `저희는 환경·관광 분야 공모전을 준비하는 대학생 팀입니다.
현재 기획자 2명, 디자이너 1명으로 구성되어 있고,
아이디어를 실제 결과물로 빠르게 만들어 갈 팀원을 찾고 있어요.`,
    teamCulture: {
      decisionStructure: 1,
      workProcess: 0,
      communicationMood: 1,
      workLifeBalance: 0,
      roleDivision: 1,
    },
    imageUrl: 'https://picsum.photos/800/480',
  },
};
