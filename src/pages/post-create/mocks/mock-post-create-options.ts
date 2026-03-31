export interface PostFormOption {
  id: number;
  name: string;
}

export const MOCK_DOMAIN_OPTIONS: PostFormOption[] = [
  { id: 1, name: '환경' },
  { id: 2, name: 'IT' },
  { id: 3, name: '교육' },
  { id: 4, name: '디자인' },
  { id: 5, name: '창업' },
  { id: 6, name: '마케팅' },
];

export const MOCK_ROLE_OPTIONS: PostFormOption[] = [
  { id: 301, name: '기획자' },
  { id: 302, name: 'PM' },
  { id: 401, name: '프론트엔드 개발자' },
  { id: 402, name: '백엔드 개발자' },
  { id: 403, name: '앱 개발자' },
  { id: 404, name: 'UXUI 디자이너' },
  { id: 405, name: '브랜딩 디자이너' },
  { id: 406, name: '마케터' },
];

export const ROLE_OPTION_NAME_MAP = Object.fromEntries(
  MOCK_ROLE_OPTIONS.map((role) => [role.id, role.name]),
) as Record<number, string>;
