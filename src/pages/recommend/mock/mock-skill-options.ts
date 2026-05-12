import type { SuccessResponse } from '@shared/api/types';

export interface FieldSkillItemResponse {
  fieldId: number;
  fieldName: string;
  skillId: number;
  skillName: string;
}

interface FieldSkillResponseData {
  items: FieldSkillItemResponse[];
}

export type FieldSkillResponse = SuccessResponse<FieldSkillResponseData>;

export const MOCK_FIELD_SKILL_RESPONSE: FieldSkillResponse = {
  status: 200,
  msg: 'OK',
  data: {
    items: [
      {
        skillId: 121,
        skillName: 'GA4',
        fieldId: 100,
        fieldName: 'MARKETING',
      },
      {
        skillId: 122,
        skillName: 'Google Trends',
        fieldId: 100,
        fieldName: 'MARKETING',
      },
      {
        skillId: 123,
        skillName: 'SEMRush',
        fieldId: 100,
        fieldName: 'MARKETING',
      },
      {
        skillId: 124,
        skillName: 'Ahrefs',
        fieldId: 100,
        fieldName: 'MARKETING',
      },
      {
        skillId: 125,
        skillName: 'Jasper',
        fieldId: 100,
        fieldName: 'MARKETING',
      },
      {
        skillId: 126,
        skillName: 'Miro',
        fieldId: 100,
        fieldName: 'MARKETING',
      },
      {
        skillId: 127,
        skillName: 'Pocket',
        fieldId: 100,
        fieldName: 'MARKETING',
      },
      {
        skillId: 128,
        skillName: 'MailChimps',
        fieldId: 100,
        fieldName: 'MARKETING',
      },
      {
        skillId: 129,
        skillName: 'Abitly',
        fieldId: 100,
        fieldName: 'MARKETING',
      },
    ],
  },
};
