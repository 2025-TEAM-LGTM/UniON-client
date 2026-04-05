import type { SuccessResponse } from '@shared/api/types';
import type { GetFieldRoleResponse } from '@shared/types/filter/filter';

export type FieldRoleResponse = SuccessResponse<GetFieldRoleResponse>;

export const MOCK_FIELD_ROLE_RESPONSE: FieldRoleResponse = {
  status: 200,
  msg: 'OK',
  data: [
    {
      fieldId: 100,
      fieldName: '기획/마케팅',
      roleId: 101,
      roleName: 'Content Marketer',
    },
    {
      fieldId: 100,
      fieldName: '기획/마케팅',
      roleId: 102,
      roleName: 'Social Media Marketer',
    },
    {
      fieldId: 100,
      fieldName: '기획/마케팅',
      roleId: 103,
      roleName: 'Digital Marketer',
    },
    {
      fieldId: 100,
      fieldName: '기획/마케팅',
      roleId: 104,
      roleName: 'Copywriter',
    },
    {
      fieldId: 100,
      fieldName: '기획/마케팅',
      roleId: 105,
      roleName: 'PR/Marketing Planner',
    },
    {
      fieldId: 200,
      fieldName: '예술',
      roleId: 201,
      roleName: 'Director',
    },
    {
      fieldId: 200,
      fieldName: '예술',
      roleId: 202,
      roleName: 'Photographer',
    },
    {
      fieldId: 200,
      fieldName: '예술',
      roleId: 203,
      roleName: 'Sound designer',
    },
    {
      fieldId: 300,
      fieldName: '개발',
      roleId: 301,
      roleName: 'Frontend developer',
    },
    {
      fieldId: 300,
      fieldName: '개발',
      roleId: 302,
      roleName: 'Backend developer',
    },
    {
      fieldId: 300,
      fieldName: '개발',
      roleId: 303,
      roleName: 'Mobile App developer',
    },
    {
      fieldId: 300,
      fieldName: '개발',
      roleId: 304,
      roleName: 'Data/AI engineer',
    },
    {
      fieldId: 300,
      fieldName: '개발',
      roleId: 305,
      roleName: 'Embedded/Hardware engineer',
    },
    {
      fieldId: 400,
      fieldName: '디자인',
      roleId: 401,
      roleName: 'UI/UX Designer',
    },
    {
      fieldId: 400,
      fieldName: '디자인',
      roleId: 402,
      roleName: 'Graphic Designer',
    },
    {
      fieldId: 400,
      fieldName: '디자인',
      roleId: 403,
      roleName: 'Publication Designer',
    },
  ],
};
