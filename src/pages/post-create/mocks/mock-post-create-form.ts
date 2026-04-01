import type { RoleCountValue } from '@entities/posts/model/post-form/post-form';

interface RecruitPeriod {
  startDate: string;
  endDate: string;
}

interface TeamCultureValue {
  [key: string]: 0 | 1;
}

export interface MockPostCreateForm {
  title: string;
  domainIds: number[];
  recruitPeriod: RecruitPeriod;
  homepageUrl: string;
  contact: string;
  currentRoles: RoleCountValue[];
  recruitRoles: RoleCountValue[];
  aboutUs: string;
  teamCulture: TeamCultureValue;
  seeking: string;
  imageKey: string;
  imageSize: number;
}

export const MOCK_POST_CREATE_FORM: MockPostCreateForm = {
  title: '공모전 같이 나가실 분 구합니다',
  domainIds: [1, 3],
  recruitPeriod: {
    startDate: '2026-01-15',
    endDate: '2026-02-10',
  },
  homepageUrl: 'https://example.com',
  contact: 'https://open.kakao.com/o/xxxx',
  currentRoles: [
    { roleId: 302, count: 1 },
    { roleId: 301, count: 1 },
  ],
  recruitRoles: [
    { roleId: 201, count: 1 },
    { roleId: 101, count: 1 },
  ],
  aboutUs: '우리의 팀 문화와 정규 일정을 이래요',
  teamCulture: {
    A: 1,
    B: 1,
    F: 0,
    I: 0,
    L: 0,
  },
  seeking: '이런 분을 찾아요',
  imageKey: 'uploads/9e6705ec-2469-4243-9bc2-c5326990fae7',
  imageSize: 0,
};
