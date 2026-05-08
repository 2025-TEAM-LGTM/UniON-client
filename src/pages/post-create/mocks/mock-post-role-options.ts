import type { Option } from '@shared/types/common';

interface FieldRoleOptionGroup {
  field: Option;
  roles: Option[];
}

const MOCK_FIELD_ROLE_OPTION_GROUPS: FieldRoleOptionGroup[] = [
  {
    field: { id: 1, name: '기획' },
    roles: [
      { id: 101, name: 'PM' },
      { id: 102, name: '서비스 기획자' },
      { id: 103, name: '사업 기획자' },
    ],
  },
  {
    field: { id: 2, name: '디자인' },
    roles: [
      { id: 201, name: 'UX 디자이너' },
      { id: 202, name: 'UI 디자이너' },
      { id: 203, name: 'BX 디자이너' },
    ],
  },
  {
    field: { id: 3, name: '개발' },
    roles: [
      { id: 301, name: '프론트엔드 개발자' },
      { id: 302, name: '백엔드 개발자' },
      { id: 303, name: 'AI 엔지니어' },
      { id: 304, name: 'iOS 개발자' },
      { id: 305, name: 'Android 개발자' },
    ],
  },
  {
    field: { id: 4, name: '마케팅' },
    roles: [
      { id: 401, name: '콘텐츠 마케터' },
      { id: 402, name: '퍼포먼스 마케터' },
    ],
  },
];

export const MOCK_ROLE_FIELDS: Option[] = MOCK_FIELD_ROLE_OPTION_GROUPS.map(
  ({ field }) => field,
);

export const MOCK_ROLES_BY_FIELD_OPTIONS: Record<number, Option[]> =
  MOCK_FIELD_ROLE_OPTION_GROUPS.reduce<Record<number, Option[]>>(
    (acc, { field, roles }) => {
      acc[field.id] = roles;
      return acc;
    },
    {},
  );

export const MOCK_ALL_ROLE_OPTIONS: Option[] =
  MOCK_FIELD_ROLE_OPTION_GROUPS.flatMap(({ roles }) => roles);
