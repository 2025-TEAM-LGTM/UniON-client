import type { FieldRoleItemResponse } from '@shared/types/filter/filter';

export const MOCK_FIELD_ROLE_RESPONSE: { data: FieldRoleItemResponse[] } = {
  data: [
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
      fieldId: 300,
      fieldName: '개발',
      roleId: 105,
      roleName: 'Frontend Developer',
    },
    {
      fieldId: 400,
      fieldName: '디자인',
      roleId: 104,
      roleName: 'Product Designer',
    },
  ],
};
