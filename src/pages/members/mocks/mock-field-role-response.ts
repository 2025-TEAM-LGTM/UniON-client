import type { SuccessResponse } from '@shared/api/types';

export interface FieldRoleItemResponse {
  fieldId: number;
  fieldName: string;
  roleId: number;
  roleName: string;
}

interface FieldRoleResponseData {
  items: FieldRoleItemResponse[];
}

export type FieldRoleResponse = SuccessResponse<FieldRoleResponseData>;

export const MOCK_FIELD_ROLE_RESPONSE: FieldRoleResponse = {
  status: 200,
  msg: 'OK',
  data: {
    items: [
      {
        fieldId: 1,
        fieldName: '마케팅',
        roleId: 101,
        roleName: '콘텐츠 마케터',
      },
      {
        fieldId: 1,
        fieldName: '마케팅',
        roleId: 102,
        roleName: '퍼포먼스 마케터',
      },
      {
        fieldId: 1,
        fieldName: '마케팅',
        roleId: 103,
        roleName: '브랜드 마케터',
      },
      {
        fieldId: 2,
        fieldName: '디자인',
        roleId: 201,
        roleName: 'UI 디자이너',
      },
      {
        fieldId: 2,
        fieldName: '디자인',
        roleId: 202,
        roleName: 'UX 디자이너',
      },
      {
        fieldId: 2,
        fieldName: '디자인',
        roleId: 203,
        roleName: '그래픽 디자이너',
      },
      {
        fieldId: 3,
        fieldName: '개발',
        roleId: 301,
        roleName: '프론트엔드 개발자',
      },
      {
        fieldId: 3,
        fieldName: '개발',
        roleId: 302,
        roleName: '백엔드 개발자',
      },
      {
        fieldId: 3,
        fieldName: '개발',
        roleId: 303,
        roleName: '풀스택 개발자',
      },
    ],
  },
};
