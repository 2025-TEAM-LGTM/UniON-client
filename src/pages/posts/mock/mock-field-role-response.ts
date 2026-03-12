import type { GetFieldRoleResponse } from '@shared/types/filter/filter';

export const MOCK_FIELD_ROLE_RESPONSE: GetFieldRoleResponse = {
  status: 0,
  msg: 'success',
  data: [
    {
      roleId: 101,
      roleName: '프론트엔드',
      fieldId: 10,
      fieldName: '개발',
    },
    {
      roleId: 102,
      roleName: '백엔드',
      fieldId: 10,
      fieldName: '개발',
    },
    {
      roleId: 103,
      roleName: '앱',
      fieldId: 10,
      fieldName: '개발',
    },
    {
      roleId: 201,
      roleName: '브랜딩 디자이너',
      fieldId: 20,
      fieldName: '디자인',
    },
    {
      roleId: 202,
      roleName: 'UIUX 디자이너',
      fieldId: 20,
      fieldName: '디자인',
    },
    {
      roleId: 301,
      roleName: '기획',
      fieldId: 30,
      fieldName: '기획',
    },
    {
      roleId: 401,
      roleName: '마케터',
      fieldId: 40,
      fieldName: '마케팅',
    },
  ],
};
