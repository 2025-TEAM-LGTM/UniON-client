import type { Option } from '@shared/types/common';

export const SIGNUP_ROLE_FIELDS: Option[] = [
  { id: 1, name: '기획' },
  { id: 2, name: '디자인' },
  { id: 3, name: '개발' },
  { id: 4, name: '마케팅' },
];

export const SIGNUP_ROLES_BY_FIELD: Record<number, Option[]> = {
  1: [
    { id: 101, name: 'PM' },
    { id: 102, name: '서비스 기획자' },
    { id: 103, name: '사업 기획자' },
  ],
  2: [
    { id: 201, name: 'UX 디자이너' },
    { id: 202, name: 'UI 디자이너' },
    { id: 203, name: 'BX 디자이너' },
  ],
  3: [
    { id: 301, name: '프론트엔드 개발자' },
    { id: 302, name: '백엔드 개발자' },
    { id: 303, name: 'AI 엔지니어' },
    { id: 304, name: 'iOS 개발자' },
    { id: 305, name: 'Android 개발자' },
  ],
  4: [
    { id: 401, name: '콘텐츠 마케터' },
    { id: 402, name: '퍼포먼스 마케터' },
  ],
};
